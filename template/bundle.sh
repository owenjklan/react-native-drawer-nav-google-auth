#!/bin/bash

# Be sure to update JAVA_HOME and ANDROID_HOME as appropriate
# for your system
export JAVA_HOME=/usr/lib/jvm/java-1.19.0-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator

# Ensure the assets directory is present before attempting to bundle
mkdir -p ./android/app/src/main/assets

react-native bundle \
    --dev false \
    --platform android \
    --entry-file index.js \
    --bundle-output ./android/app/src/main/assets/index.android.bundle \
    --assets-dest ./android/app/src/main/res

if [ $? -eq 0 ]; then
    echo -e "\n\033[32;1m ** BUNDLING SUCCESSFUL **\033[0m\n"
else
    echo -e "\n\033[31;1m ** THERE WAS AN ISSUE WITH BUNDLING. SEE ABOVE FOR DETAILS **\033[0m\n"
fi
