---
id: introduction
title: "Chapter 1: Introduction"
sidebar_position: 1
---

1 Introduction

This document is a pilot’s manual for XCSoar, an open-source glide computer originally developed for Pocket PC devices. The audience is assumed to have a sound knowledge of the fundamental theory of flight for gliders, and at least a basic working knowledge of cross-country soaring.

Updates to the XCSoar software may result in some of this manual being out of date. You should read the release notes distributed with the software to keep track of changes. Updates to the manual and software are available from

https://xcsoar.org

### 1.1 Organization of this manual

This manual most notably is written in order to get the XCSoar user started quickly as well as support his deep understanding of all the features, concepts and tactics introduced. At all times, the authors made their effort for doing this from a pilot’s perspective (and honestly hope for having succeeded).

The authors highly encourage you to take your time reading the entire manual chapter by chapter (with exception of the reference chapters InfoBoxes and Configuration). Feel assured, the time you will have spent will pay off as a manifold in understanding. On your way reading you might feel blue once in a while. That is why the authors introduced some blueish things: links and icons.

DU

Figure 1.1: Icons configuration, reminder, gesture, warning

Warning. The icon warning is used, whenever things shall be followed strictly. Not following will cause unexpected results, total dysfunction, or even danger to life. Proceed only, if warning understood.

Gesture. A swipe gesture input is available using devices with a touch screen to invoke a menu or function amongst others. In this example, DU stands for moving your fingertip down, then up, (in straight lines) on the screen.

Specific Gesture. Whenever the manual’s authors kept up with XC-

XCSoar User Manual

1.

INTRODUCTION

13.5

1.6

Soar’s rapid development process in writing, a specific icon is provided, depicting the movements.

Reminder. This icon tags a tip, trick, things you might remind after having read corresponding sections and so on.

Configuration see... The icon depicting two craftsman’s tools refers to an in-depth description of items being mentioned and how to configure them. The numbers beside the icon refer to a specific chapter / section of this manual’s reference chapters 12 and 13, in this case referring to section 13.5.

Stopfromreadingmanualswhilstflyinginverted!

Read at home, configure on the ground, safely. Having perceived this (inverted) warning as an example, you are ready to proceed.

Referring to the second exemplary case of the icon “configuration” to the left, the icon points towards chapter 1, (this chapter), section 1.6, “Using XCSoar safely” underneath, which could be understood as a “how to configure yourself”. It is up to you whether to jump to an in depth discussion and go back or just proceed. If reading this manual electronically, clicking the number will let you jump to the requested cross -reference. Use the go-to “back” (or similar) function of your particular browser to proceed with the chapter you jumped from.

The numbers are printed in blue as are the icons introduced, signalling “help available”. And so are other Universal Resource Locators, under- lying blue text. Clicking on text like https://xcsoar.org/contact will open your world wide web browser or mailer to get in touch with other resources or knowledgeable people respectively.

The remainder of this chapter “Introduction” is about getting you pre- pared for XCSoar, how to raise your level of understanding and main- tain your skills. Chapter 11 “Quickstart” might be the next waypoint after 2 “Installation” for the urgent user. Feel free to cut short, but do not resume too sadly when reading chapter by chapter, following:

Chapter 3 introduces the user interface concepts and gives an overview of the display .

Chapter 4 describes the moving map part of the display in greater detail and describes how the software can assist in general navigation. Chapter 5 describes how cross-country tasks are specified and flown, and presents some of the analysis tools available to pilots to help improve their performance. Chapter 6 goes into further detail on the glide computer functions as it is important for pilots to be aware of how the computer performs its calculations.

Chapter 7 describes how the computer can interface to variometers and other air data sensors, and how it uses these measurements to provide various models of the atmosphere, in particular on winds and thermal convection. Chapter 8 describes how XCSoar can assist in manag- ing flight in special use airspace and the FLARM collision awareness

XCSoar User Manual

1.

INTRODUCTION

system. Chapter 10 deals with systems integration and systems diag- nostics, the integration of XCSoar with communications devices and with airframe switches.

The remainder of the manual contains mainly reference material. Chap- ter 12 lists the types of information that can be displayed in the grid of InfoBoxes next to the map display. The configuration of the software is described in detail in Chapter 13. The formats of the various data files that program uses, as well as where to obtain them from and how to edit them, is described in Chapter 14.

Finally, a short history and discussion of XCSoar’s development process is presented in Chapter 15.

Throughout this manual are several screenshots of XCSoar. These are taken from the program running on a variety of hardware platforms and possibly even different versions. Each platform and version may have different screen resolutions, layouts and fonts, and so there may be slight differences in the appearance of the display. Most of the screenshots in this manual are taken of XCSoar running in landscape orientation.

### 1.2 Notes

Screenshots

### 1.3 Platforms

Android Devices : XCSoar runs on Android 6.0 or newer.

eBookreader : XCSoar runs on several Kobo eReader devices.

Windows PC :

It is possible to run XCSoar on an ordinary computer with the Windows operating system (Vista and above). This setup can be used for training yourself in using XCSoar. A simulation mode is included in XCSoar as well as a IGC replay function, that can be used when not connected to a valid GPS source.

Unix/Linux PC : XCSoar runs on Unix/Linux.

### 1.4 Technical support

Troubleshooting

A small team of dedicated developers produces XCSoar. Although we are happy to help with the use of our software, we cannot teach If you have a you about basics of modern information technology. question about XCSoar in particular not found in this manual please get in touch. You will find all of the following links summarized at:

https://xcsoar.org/contact

To begin with communication, join the XCSoar forum at:

XCSoar User Manual

1.

INTRODUCTION

Feedback

Updates

### 1.5 Training

Using XCSoar on the PC

https://forum.xcsoar.org

If your concern appears not already addressed, post it or email us:

xcsoar-user@lists.sourceforge.net

Any frequent questions will be added to this document. You may also find it useful to subscribe to the XCSoar users mailing list so you will be kept up to date with latest developments.

If all of this does not help, you probably discovered a bug.

Like any complex software program, XCSoar may be subject to soft- ware bugs, so if you find any, please report them to the XCSoar de- velopers by using our bug tracker portal at:

https://xcsoar.org/develop/new_ticket.html

or by sending an email to

xcsoar-devel@lists.sourceforge.net

XCSoar logs many valuable things in a logfile xcsoar.log in the XCSoarData directory. The logfile can be appended to the bug ticket in order to help XCSoar developers determine the cause of possible problems. If you like the idea of doing some more, get involved:

https://xcsoar.org/develop

You should periodically visit the XCSoar website to check for pro- gram updates. The installation procedure in the following chapter can typically be repeated in order to upgrade the software. All user configuration settings and data files will be preserved during the re- installation/upgrade.

It is also recommended to periodically check for updates to data files, particularly Special Use Airspace, which may be subject to change by the national civil aviation authority.

For the safety of yourself and others, pilots using XCSoar are advised to train themselves in using XCSoar on the ground and become familiar with its interface and features prior to flight.

The PC versions of XCSoar may be used to become familiar with XCSoar’s interface and functionality in the comfort of one’s home. All files and configuration used by this version are identical to the

XCSoar User Manual

1.

INTRODUCTION

embedded versions, so it can be helpful to try out customisations on the PC version before using them in flight.

The PC versions can also be connected to external devices and operate just as the embedded versions do. Suggested uses include:

• Connect the PC to a FLARM device to use XCSoar as a ground

station display of FLARM-equipped traffic.

• Connect the PC to an intelligent variometer such as Vega to

test configuration settings of the variometer.

Using XCSoar with a flight simulator

A good way to learn how to use XCSoar is to connect the smartphone device to a PC running a flight simulator that can output NMEA sentences to the serial port. Suitable simulators include Condor and X-Plane.

The benefit of this form of training is that XCSoar can be used in FLY mode, so it behaves exactly as if you were really flying, and you can get a good feel for how the program works while you are flying the simulator.

### 1.6 Using XCSoar safely

The use of an interactive system like XCSoar in flight carries with it certain risks due to the potential distraction of the pilot from main- taining situational awareness and eyes outside the cockpit.

The philosophy guiding the design and development of the software is to try to reduce this distraction by minimising the need for user interactions as much as possible, and by presenting information in a clear fashion able to be interpreted at a glance.

Pilots using XCSoar must take responsibility for using the system safely. Good practice in the use of XCSoar includes:

• Becoming familiar with the system thoroughly through training

on the ground.

• Performing clearing turns before interacting with XCSoar in flight in order to ensure there is no collision risk with other traffic.

• Setting up the system to take advantage of automatic functions and input events so that user interactions can be minimised. If you find yourself mechanically performing certain interactions frequently, ask yourself (or other XCSoar users) if the software can be made to do these interactions for you.
