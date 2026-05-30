---
id: avionics-and-airframe
title: "Chapter 10: Avionics and Airframe"
sidebar_position: 10
---

10 Avionics and Airframe

### 10.1 Battery life

This chapter discusses XCSoar as a subsystem of the aircraft. It cov- ers the integration of XCSoar with external devices, including GPS, switches and sensors, and aircraft radio transceivers and other devices. Integration with FLARM is covered in Chapter 8, and integration with variometers is covered in Chapter 7.

Most modern PDAs are designed for short sporadic use and so do not have a very good battery capacity when considering the duration of cross-country soaring flights. It is recommended that the PDA be powered externally, via an appropriate voltage converter connected to the glider battery. This installation should be performed by appro- priately qualified personnel, and should contain a fuse and a manual isolation switch.

The greatest cause of power drain by the PDA is the LCD back-light, however domestic PDAs are not particularly bright so they may need to have the back-light up full. However, for EFIS systems, it is rec- ommended to use the lowest back-light settings that are comfortable.

When operating PDAs under internal battery, XCSoar detects a low battery condition and allows the operating system to shut down and preserve the memory. In addition, it can be set up to blank the screen after a period of inactivity, so that it can reduce the power consump- tion. When the screen is blanked, pressing one of the hardware but- tons on the PDA activates the screen again. When a status message is issued by the system, the screen becomes activated.

Another way to help conserve battery power is to reduce the compu- tational load by turning off certain features. Drawing terrain and long snail trails contribute significantly to the CPU load.

For other embedded platforms, a InfoBox is avail- able that displays the available battery life remaining, as well as the charge state (AC on–charging, or AC Off–operating off internal battery power).

Battery

### 10.2 GPS connection

XCSoar requires a 3D GPS fix for its navigation functions.

XCSoar User Manual

GPS status

GPS status icons and text may appear on the bottom edge of the map display to indicate:

(a)

(b)

Waiting for GPS fix (a) : Better reception or additional time to search for satellites is required. The GPS may have a 2D fix. The aircraft symbol disappears while there is no 3D fix.

GPS not connected (b) : No communication with the GPS is received. This indicates an error in the comm port settings or the GPS device may be disconnected or switched off.

When the GPS is not connected for more than one minute, XCSoar automatically attempts to restart communication with the device and will then resume waiting. This method has shown to provide the most reliable way of recovering from communication errors.

XCSoar can handle multiple GPS sources and it uses them to provide redundancy. The sources are configured on the System Configuration screen, on the page entitled “Devices”. Device A is the primary GPS data source and Device B is the secondary source.

During operation, if the primary GPS source drops out, XCSoar will If both sources have use the GPS data from the secondary source. valid fixes, the secondary source is ignored. For this reason, it is recommended to have the GPS source with the best antenna or most reliable operation as the primary source (i.e. Device A).

Some older GPS units (and some new ones) do not output altitude relative to mean sea level, rather they output elevation with respect to the WGS84 ellipsoid. XCSoar detects when this occurs and applies the ellipsoid to geoid offset according to an internal tabulated data at two degree spacing. This is not required for FLARM units, which correctly output MSL altitude.

GPS altitude

### 10.3 Switch inputs

XCSoar supports monitoring of switches and sensors connected to the host computer, for the purpose of providing situational awareness feedback, alerts, or as general-purpose user-interface input devices. Several mechanisms are available for interfacing to switches and sen- sors:

Serial device : Certain intelligent variometers such as Triadis Engineering’s Vega have multiple airframe switches and pass this information on to the PDA or EFIS as special NMEA sentences.

XCSoar User Manual

Bluetooth device : Many Pocket PC devices support wireless connection to a Blue- tooth Game-Pad device that has several buttons. This is more suited to user-interface input devices than airframe monitoring.

A custom ‘input events’ file determines how switch and sensor inputs are processed.

A standard set of airframe inputs are defined as:

• Airbrake

• Flap position (positive/landing flap, neutral, negative/reflex)

• Landing gear

This set is expected to expand to include engine and fuel monitoring.

Other logical inputs from Vega include computed quantities relating to specific airframe alerts and aircraft operating envelope warnings, for example “airbrake extended and gear retracted”.

Refer to the Vega documentation for more details on switch inputs and how they may be used.

### 10.4 Vega switch dialogue

Config 3 (cid:46) Vega

Airframe

Switches

A dialogue displaying switch states for the Vega variometer is available from the menu.

This dialogue is updated in real-time, allowing the pilot to check the correct functioning of switches during daily inspection tests or before takeoff.

### 10.5 Slave mode

A device type in the configuration settings, “NMEA Out” is defined for use in joining two systems in a master-slave mode. In the master, the second com device can be set to NMEA Out, and all data received in the first com device (as well as outgoing data) will be sent to the slave.

As an example where two devices are being connected together, in the slave, the first com device can then be set to “Vega” and this system

XCSoar User Manual

receives all data as if it came from the Master’s GPS and connected instruments (Vega, FLARM etc).

### 10.6 System status

Info 2 (cid:46) Status

### 10.7 Multiple devices

The system status dialogue is used primarily as a systems check, to see how the glide computer and the connected devices are performing. This is accessed via the menu and then selecting the tabular System.

All dynamic values (e.g. battery voltage, number of satellites in view) are updated continuously.

You can configure multiple external devices, connected at the same time (few PDAs have two serial ports, but Bluetooth can handle any number of concurrent connections).

When both provide a valid GPS fix, the first one (i.e. Device A) is chosen by XCSoar, and the second GPS fix is ignored. As soon as the first device fails, XCSoar switches to the second one automatically, until the first one recovers.

The same is true for all values (barometric altitude, vario, airspeed, traffic, ...): XCSoar prefers the first device, and uses the second device only for values that are not received from the first one.

Example: Device A is a CAI 302, and Device B is a FLARM. That gives you the best of both: XCSoar has airspeed, vario and traffic data.

### 10.8 Managing external devices

Config 1 (cid:46) Devices

13.28

The device management dialogue can be accessed from the configu- ration menu. It shows a list of configured external devices, and it lists what information they provide.

The button “Reconnect” attempts to reconnect to the selected device. XCSoar reconnects to a failed device periodically, but sometimes, it might be desirable to trigger that manually.

The button “Flight download” is only available with supported IGC loggers (see Section 2.5 for a list). Upon clicking, XCSoar retrieves a list of flights, and asks you to select one. The IGC file will be downloaded to the “logs” directory inside XCSoarData.

The button “Manage” is enabled when a Vega or a CAI 302 is con- nected. It provides access to special features of these devices, such as clearing the CAI 302 flight memory, which is needed sometimes to work around a Cambridge firmware bug.
