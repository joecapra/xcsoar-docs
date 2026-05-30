---
id: installation
title: "Chapter 2: Installation"
sidebar_position: 2
---

2 Installation

### 2.1 To run XCSoar

you need to obtain the following:

• a device to run XCSoar on

• XCSoar

• a GPS receiver

• a waypoint file

• an airspace file (optional)

• a map file (optional)

### 2.2 ! Before you go out flying the first time with XCSoar !

After having installed XCSoar successfully, you might use it instantly. XCSoar will launch with a ready-to-use pre-configuration. But be aware, that up to this point your new toy will give you a moving map display only. Don’t trust the computations. You have to tell XCSoar which plane you are flying in advance. This is done by specifying your plane’s data as are polar, weight and some other data. However it’s always a good idea to study the manual and become familiar with XCSoar at home.

### 2.3 How to get the most from XCSoar

In order to achieve your maximum benefit from XCSoar, you are kindly asked to do some more after having installed the software and down- loaded some data files. “Some more” includes personal and plane data as well as configuration of just a few features. Unless you are willing to tweak everything XCSoar provides, this could be done in a rather short time. Necessary steps are summarized in an XCSoar Checklist, given in the next section.

If you are planning to arrange a system with several components en- gaged in, this manual will give you valuable advice on both, how to set up things and how to use them.

If you are a pilot in a hurry, the authors suggest to change to the short form manual XCSoar-in-a-Flash going through the XCSoar Checklist step by step. The short form manual is available on https: //xcsoar.org/discover/manual.html.

XCSoar User Manual

### 2.4 XCSoar Checklist

Bring XCSoar into play

2.

INSTALLATION

• get hardware and install XCSoar

• get appropriate data files of your flight district

• tell XCSoar which data files to use

• tell XCSoar about the glider’s polar & weight

• possibly connect to instruments

• finish setup and familiarize

• mount hardware

• add items listed underneath to your checklists

• make “home”

Conduct preflight check, including

• setup polar and weight

• setup wind and flight parameters (MC, bugs, QNH)

• possibly setup a task

Conduct start check, including

• Check wind and flight setup once more

Fly, enjoy

Conduct after flight check

• Download flight logs from logger, upload to skylines and OLC

• Gather statistical data of flight.

XCSoar User Manual

### 2.5 Compatibility

Devices for running XCSoar

2.

INSTALLATION

GPS, Logger, Vario

XCSoar runs on the following platforms:

• Android mobile phones and tablets with Android 6.0 or newer

• eReader Kobo

• Windows 2000 or newer

• Linux

• Mac OS X (outdated)

XCSoar is compatible with any GPS emitting NMEA data. Most modern Android devices have a built-in GPS, but for several reasons it is favorable to connect to one or more external devices:

• a specialized GPS receiver gains much better reception providing

much better data for measures and calculations

• an airspeed indicator allows quick and exact wind estimates

without circling

• a vario improves the thermal assistant

• a task can be declared to an IGC logger, and after landing, the

flight log can be downloaded

• some varios allow synchronising the MacCready setting with XC-

Soar

• FLARM (and even ADS-B input) provide informations and states of others around you (and of course FLARM gives you collision detection)

XCSoar User Manual

2.

INSTALLATION

Supported external devices and features

Supported:

-Features

-Stream Data

n o i t a r a l c e D

. l r t c

e t o m e R √

l

d a o n w o D

e d u t i t l a

d e e . o p o i s r r r a a i B V A √ √ √

r o s n e S - G

d n W

i

√ √ √ √ √ √ √ √

√ √ √ √ √ √ √ √

√ √ √ √ √

√ √

√ √ √

√

√

√ √ √

√

√ √

√ √ √

√ √ √

√ √ √ √ √ √ √ √ √

√ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √ √

√

√

√ √

√ √ √

NMEA Device Borgelt B50 CAI 302 CAI GPS Nav Condor Digifly Leonardo EW Logger EW microRecorder FLARM Flymaster F1 Flytec 5030 ILEC SN10 IMI ERIXX LX20, Colibri LXNAV Nano LXNAV V7 LX Navigation Eos57 PosiGraph Triadis Altair (pro) Triadis Vega Vaulter Volkslogger Westerboer VW1150 XCVario Zander / SDI

While most Windows CE based devices have a serial port, such legacy hardware is not present in modern Android devices. Those can either use Bluetooth or the Android IOIO board. To use Bluetooth, you need to connect the external device to a Bluetooth-to-Serial adapter, such as the K6-Bt or the SoarTronic-BT1/2.

### 2.6 Software installation

On Android

The software is available as a free download from the XCSoar website https://xcsoar.org. This section describes which file should be downloaded, and how to install it.

Obtain XCSoar from Google’s Android market, or install the apk file manually. Copy the data files on the SD card in the directory XCSoarData.

XCSoar User Manual

On a Kobo Mini

2.

INSTALLATION

The Kobo Mini is a cheap e-book reader. e-paper screen with excellent sunlight readability.

It has a black and white

Before you begin: back up the internal SD card. The XCSoar installer may break the Kobo, though unlikely. You can always recover the Kobo from a software failure, but only if you have access to a backup.

To install XCSoar, connect the Kobo to your PC via USB. The Kobo exposes a mass storage device to your PC; open it and create a directory called .kobo (note the leading dot). Download the file KoboRoot.tgz from the XCSoar website into that directory (https: //xcsoar.org/hardware/). Unplug the Kobo and reboot it (switch it off completely, and switch it on again). You will see the message “Updating”, and after a few minutes, the Kobo shows a menu that allows you to launch XCSoar or the Kobo e-book reader software.

To copy data files (maps, waypoints, ...) to the Kobo, launch the original Kobo software (“Nickel”) and connect the Kobo to your PC again. Copy the files into a directory called XCSoarData at the top level.

Alternatively data files may be downloaded via XCSoar’s file man- ager, after having invoked a WLAN connection just before launching XCSoar.

After installing XCSoar on the Kobo, the new boot script checks for a script called XCSoarData/kobo/init.sh and executes it. If you know what you’re doing, you can use this script to do things at boot time, for example launch inetd (for telnet access).

When you launch Nickel (the original e-book firmware), the new boot script also checks for a script in XCSoarData/kobo/ named init_nickel.sh and executes it. Again, if you know what you’re doing, you can use this script to do things before Nickel is fully started, for example send commands to your attached vario (to shut it down, to cut the volume, etc...).

While powered off, XCSoar shows a log of your most recent flights on the screen. Additionally, if present, it shows the contents of the file XCSoarData/kobo/poweroff.txt at the bottom. This file can contain arbitrary text, e.g. contact/owner/emergency information.

Download the program file XCSoar.exe (target “PC”) to your hard disk.

Hacking the Kobo

The Power Off Screen

On a Windows PC

XCSoar User Manual

On Unix/Linux

2.

INSTALLATION

The file downloaded is xcsoar_XXX.deb, where XXX includes the ver- sion number and platform, e.g. xcsoar_6.0.4_i386.deb. This is a Debian package and can be installed using

sudo dpkg -i xcsoar_XXX.deb.

Use dpkg-query -L xcsoar to see where the executable and other files are installed, Additional data files must be placed in the directory ~/.xcsoar. If ~/.xcsoar does not exist, it will be created the first time that xcsoar is run.

On Raspberry Pi and Cubieboard

Install the Debian package as described above. However, unlike on “regular” Linux, XCSoar will not use X11. Instead, it runs full-screen on the Linux console.

On the Raspberry Pi 4, you need to enable the VC4 display driver by adding the following line to /boot/config.txt:

dtoverlay=vc4-fkms-v3d

XCSoar requires access to your input devices (/dev/input/event*). By default, only root is granted access. To override this, create a udev configuration file, e.g. /etc/udev/rules.d/99-input.rules:

KERNEL=="event*",(cid:32)NAME="input/%k",(cid:32)MODE="660",(cid:32)GROUP="input"

Create the group input and make your user a member:

groupadd(cid:32)input adduser(cid:32)pi(cid:32)input

### 2.7 Data files

To be able to use XCSoar’s advanced features, additional data files, such as terrain, topography, special use airspace, waypoints etc. are needed. The files that can be used with XCSoar are described in Chapter 14.

All data files should be copied into the directory XCSoarData. This directory must be in a specific place so that XCSoar knows where to look for data files:

Windows PC : XCSoarData is in your personal folder (“My Documents”)

Windows Mobile PDA/PNA :

If there is a directory named XCSoarData in the same directory as XCSoar.exe, then this one will be used. XCSoarData is on the SD card. If there is no SD card, then XCSoar looks for it in My Documents.

Unix/Linux : The directory is called .xcsoar in the user’s home directory.

XCSoar User Manual

2.

INSTALLATION

Android Devices : XCSoarData is on the SD card.

XCSoar will generate a number of additional files at run time. These will be placed in the XCSoarData directory (Windows PC, Windows and Android mobile devices), or the .xcsoar directory (Unix/Linux PC). From the first run, XCSoar will create and maintain the files user.cup (user-edited waypoints), Default.tsk (Default Task), default.prf (configuration settings), xcsoar.log, plus three directories: cache, config and logs. Additional files may be created/modified while XCSoar is running, such as task files (*.tsk) and flight logs.

### 2.8 Running XCSoar

XCSoar PC version

Two modes are available inside the XCSoar application:

FLY : This mode is used when actually flying. The simulator is disabled

and serial communications are active.

SIM : This starts XCSoar in simulator mode, no serial communications

are attempted.

The program can be run by opening the explorer window, finding the directory that has the XCSoar.exe executable, and double clicking on that program file.

The program command line options allows the screen orientation of the display to be defined:

-portrait : The screen is 480 pixels wide, 640 pixels high.

-square : The screen is 480 pixels wide, 480 pixels high.

-landscape : The screen is 640 pixels wide, 480 pixels high. This is the usual setting. If you don’t specify this parameter the landscape version will be loaded automatically.

-small : Draws the screen at half size. This is useful for using XCSoar in

conjunction with flight simulators e.g. Condor.

To change the screen orientation, it is convenient to create a shortcut to the program, then right click on the shortcut icon and click on “Shortcut”. In the field “Target” add one of the desired options listed above.

XCSoar Unix/Linux PC version

Run xcsoar from a command line, or create a shortcut on the desktop. The location of the executable file may be found using which xcsoar. Only landscape mode is supported for now.

XCSoar User Manual

Loading data files

2.

INSTALLATION

The first time that XCSoar is run, it does not automatically load the data files that you placed in the XCSoarData directory. To tell XCSoar which files to load, double click/tap the map (the large, blank white part with the glider symbol in the center), choose the menu (click/tap it twice), then select the item System . The Config 2 Configuration screen should be displayed: The first page allows you to choose the map, waypoint and airspace files, by clicking/tapping on the text boxes. Many other features of XCSoar may be configured here. These are described in detail in Chapter 13. Once completed, XCSoar reloads those files; from now on, the data files will be loaded automatically at run time.

When XCSoar starts up, it will check for existing profiles. If multiple profiles are detected it will display a small window asking you which profile to load. To proceed, choose the desired profile and press Enter. If no profile is chosen the settings from the last session are loaded again. Profiles can be useful for example in the following cases:

• Different pilots

• Competition versus casual flying

• Flying in different locations

• Different planes (with different polars)

Profiles also might be understood as preserving a backup of a certain configuration. Virtually every of XCSoar’s settings is stored in a profile file with extension .prf. Once you are happy with all your settings, make two copies of your profile file. One carrying extension .prf, the second copy carrying extension .bak. Whereas the .prf file will show up on startup and reflect all of your changes made whilst XCSoar is running for the next startup, the file .bak will keep the settings, you judged being worth it to preserve. As an example you might create a set of files as is:

• buddiesinArcus.prf

• buddiesinArcus.bak

• johninKa6atwonderland.prf

• johninKa6atwonderland.bak

XCSoar comes with a simple interface allowing for conducting a sim- ulated flight. Depending on the hardware platform, there are different methods for altering values of bearing, speed, and height. Simulation is intended for your first familiarization with XCSoar in action. If you

Start-up and user profiles

SIM mode

XCSoar User Manual

2.

INSTALLATION

like the idea simulating a more realistic thing at home, you should acquire a “true” soaring simulator, to be connected to XCSoar.

On the map screen, clicking/touching the glider symbol with touch- screen or mouse and dragging causes the glider to move in the direction of the drag, the speed being proportional to the length of the drag.

With buttons, the aircraft speed, altitude and direction may be changed using the InfoBoxes. The following may not be available in total on ev- ery hardware platform, but on any of the platforms XCSoar supports, a full set of inputs needed for simulation purposes is possible.

By pushing an InfoBox, you select a value to be altered by buttons, either hardware or menu buttons. The aircraft altitude can be adjusted by selecting the GPS altitude InfoBox Alt GPS , and touching the up or down key or buttons on the touchscreen. The airspeed can be adjusted by selecting the InfoBox ground speed V Gnd , touching up or down key or menu buttons. The glider’s track can be adjusted by selecting the track InfoBox Track , and touching up/down buttons.

With either of the Alt GPS or V Gnd selected, the glider’s direction may be changed using the left/right keys.

Other controls, buttons and menus work the same as in FLY mode.

When XCSoar starts up, shuts down, or loads large files, such as airspace, waypoints, terrain, etc., a progress screen is presented while the data is being loaded. This screen has a progress bar which indicates the data loading activity, and a short line of text describing the action that is being performed.

This screen also displays the software version information.

For PDA and PC versions, XCSoar is shut down from the menu. The menu can be opened by double-clicking on the map or the InfoBoxes.

QUIT

For PC versions, XCSoar can also be shut down by clicking the close icon on the XCSoar window.

Splash screen

Exiting the program
