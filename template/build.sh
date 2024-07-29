#!/bin/bash

# Be sure to update JAVA_HOME and ANDROID_HOME as appropriate
# for your system
export JAVA_HOME=/usr/lib/jvm/java-1.19.0-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator

pushd android
./gradlew assembleRelease

if [ $? -eq 0 ]; then
    echo -e "\n\033[32;1m ** RELEASE BUILD SUCCESSFUL **\033[0m\n"
else
    echo -e "\n\033[31;1m ** THERE WAS AN ISSUE WITH THE RELEASE BUILD. SEE ABOVE FOR DETAILS **\033[0m\n"
fi
