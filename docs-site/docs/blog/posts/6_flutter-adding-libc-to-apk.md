---
date: 2024-01-22
draft: false
# slug:
categories:
  - flutter
tags:
  - debugging
  - solution
---

If you are developing an android app in flutter and your apk compilation step works, but then runtime halts on the following error: "ArgumentError (Invalid argument(s): Failed to load dynamic library 'libhub.so': dlopen failed: library "libc++_shared.so" not found"

<!-- more -->

```
Exception has occurred.
ArgumentError (Invalid argument(s): Failed to load dynamic library 'libhub.so': dlopen failed: library "libc++_shared.so" not found: needed by /data/app/[...]/lib/x86_64/libhub.so in namespace classloader-namespace)
```
Then you have something in your code that uses this library to run properly. Ideally flutter together with Gradle is supposed to do everything of this kind of library packaging for you, so step one is to check that your basic configuration is correct. But if that leads to a dead end, I'll offer you a more hands-on approach here. By manually adding the `libc++_shared.so` to your flutter project so that it gets included into the *apk* on build.

## How to add `libc++_shared.so` to your flutter apk
Flutter lets you do some platform specific customizations, by editing the platform folders. We want to go to this folder `android/app/src/main/` in our flutter project structure, and `mkdir jniLib`. Then `cd` into that folder and create the following file structure:
```
/jniLib/.
        ├── arm64-v8a
        ├── armeabi-v7a
        ├── x86
        └── x86_64
```
Whatever is placed in these folders, Gradle will make sure to add within the `/libs/` folder of your apk file, making its content available for your android app as libraries. Create the folders manually or `cd`  to `jniLib` and run the following bash script:
```
mkdir -p ./{arm64-v8a,armeabi-v7a,x86,x86_64} && echo "Folder structure created successfully."
```
Then it's time to populate your folders with the files you need. You can either add whetever you needed or, do what I'm going to instruct on next: add the `libc++_shared.so`.

### Adding the `libc++_shared.so` file to your `jniLib/` folder
The standard share library `libc++_shared.so` is part of the android development kit, that gets installed by android studio (I assume this is already done and that you know about how it works). You can obtain the library by copying directly from your android SDK. Go to wherever you installed the android_sdk and look for this folder `android_sdk/ndk/<version-number>/toolchains/llvm/prebuilt/<OS>/sysroot/usr/lib` and in that `lib/` folder and search for `libc++_shared.so`. You can also search for the file using your operating system search function higher up in the `ndk` file structure if you want, the main objective is to find it.

Once found you can simply copy & paste it into the folders you created in the `jniLib/` folder within the flutter project and then retry building your app. It's likely that you either have a working app, or at least a new error message that isn't related to missing this library anymore.

Personally I came across this problem while working with `rinf` for flutter and as a reference I figured things out while troubleshooting this [github issue](https://github.com/cunarist/rinf/issues/280).