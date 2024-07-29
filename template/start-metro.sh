#!/bin/bash

# Be sure to update JAVA_HOME and ANDROID_HOME as appropriate
# for your system
export JAVA_HOME=/usr/lib/jvm/java-1.19.0-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator


npx react-native start
