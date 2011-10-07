### SenchaTouch Example Application

This is an application I was asked to build for the [Colorado Film and Video Association](http://www.cfva.com). 

It is meant to copy the basic functionality of another version of the application I wrote for native iOS (see [http://itunes.apple.com/us/app/colorado-production-crew/id361128521?mt=8](http://itunes.apple.com/us/app/colorado-production-crew/id361128521?mt=8)) but using a common framework that would run on any modern phone.

I figured it is a good example of a simple application that actually has some business value. This is to help augment a talk I'm working on demonstrating how to write applications for the framework and even turn them into "native" platform applications using [PhoneGap](http://www.phonegap.com/).

I don't technically own the data, so I might have to take that down at some point. For now, however, it serves as a good example of a nice and diverse dataset. The dataImport directory is a group of Groovy scripts that simply grabs data from a CSV and exports to JSON. It probably makes a lot more sense to use local storage and that is an upgrade I'd like to add soon.

This application was built with version **1.0.1a** of Sencha Touch.

### Some Interesting Features of the Application
Finding a nice example of Sencha Touch MVC was difficult. So, my hope is that this can serve as an example of how to perform decent separation of concerns using the framework.

There are also some good examples of how to use the list controls to mimic the iPhone.

**Enjoy!**