---
id: integration
title: "Chapter 9: Integration"
sidebar_position: 9
---

9 Integration

### 9.1 Building an XCSoar system

Integration is bringing together all things and actions in an entity for building a system providing desired functionality. Things needed are hardware components, software, database files, configuration, power supply e.a. and glue components. As you might have expected, this chapter deals with integration of XCSoar, with the components of interest:

• Hardware XCSoar runs on: Pocket PC, Android...

• XCSoar software

• Flight information databases: terrain, waypoint, weather, polar,

FlarmNet, airfield details...

• Instruments: barometer, vario, FLARM, logger, horizon...

• Backup components: second XCSoar unit

• Mounting

• Configuration: XCSoar internally and connections with

• User training

No system ever runs without using some components providing no pri- mary function of interest, but some “glue”, holding things together. Most likely your XCSoar system needs one ore more of these glue com- ponents as are: Cabling as well as data, signal, and power converter and signal multiplexer.

Finally, there are things, a pilot may not think of when doing integra- tion work. However, if you want to get the max from your XCSoar system, allow for optimal interaction with other systems via interfaces.

• Remote tracking server (skylines) / Cellular network reception

and coverage

• GPS satellite network / GPS reception

• Remote database servers / data translator

• XCSoar.org / contact channels as given in chapter introduction

So now, it is time to end with systems theory and dive into reality. With countless valuable system setups possible, just a few examples of XCSoar systems are given. This is meant as a starting point for the keen pilot. This manual in no way represents a full-fledged integration guide. The five examples described will follow the path of integrating

XCSoar User Manual

9.

INTEGRATION

more components, starting with a “basic” system, consisting of one single piece of hardware only.

### 9.2 Exemplary XCSoar system setups

Due to the fact that this manual is not intended as an advertising publication, several components terms used in the following stand for a class of devices. For gathering information on hardware products, please consult XCSoar’s website https://xcsoar.org/hardware/, XCSoar’s forum https://forum.xcsoar.org or ask google. With terms emphasized you are already equipped with keywords for invoking a search and discover tour.

XCSoar Basic

Setup

Functionality:

Application

XCSoar Classic

Setup

Handheld with XCSoar and a built in GPS receiver and basic data stock, provided by XCSoar website and the national agency of your country, providing airspace data.

An XCSoar basic setup will give you an almost perfect moving map with a great basic flight information system (FIS) functionality. The glide computer will give you flight-related tactical and statistical data if polar configuration is correct. Please note that realtime compu- tations of actual climb or sink rate may suffer drastically from poor GPS reception, as built-in GPS receivers often are cheap add-ons in a mobile device’s budget. In any case, please give it a try in the air. Some of these cheap GPS receiver add-ons come with bad GPS an- tennas and sometimes are heavily dependent on local information of your cellular network provider. This dual mode locating function is called aGPS - assisted GPS. As mobile network coverage gets worse up in the air, your devices location fix follows. If your mobile device shows stable reception, you achieved a good one.

XCSoar basic is the utmost club-friendly setup out of all. With no additional hardware needed, you own a valuable system with no intru- sion into club gliders necessary. A basic system might be helpful if all of your club mates are rather conventionally oriented or if you are a parachutist with very little instrument space.

An XCSoar classic system is a basic system plus a FLARM connection. As long as the family of FLARM and FLARM-like hardware uses serial

XCSoar User Manual

9.

INTEGRATION

Functionality

Application

XCSoar Classic+

Setup

communication ports, a first piece of glue hardware appears neces- sary in many cases. There are several pieces of hardware available, converting signals from FLARM’s serial port to either USB or even Bluetooth radio link.

As you might have expected, FLARM itself gives you a collision detec- tion system. Added integration value first of all might be a rock-steady GPS reception. With precise GPS fixes, XCSoar’s actual readings im- prove a lot. Still, reception is heavily dependent on the pilot’s mount- ing of the GPS antenna. Place it in a definite professional manner and verify reception.

Further added value of FLARM devices is giving you an air pressure measurement. This enables XCSoar to compute QNH height. It is much more precise than height derived from the GPS calculations due to the fact that GPS height is the value with the worst precision out of all publicly available GPS measures. Uncertainty in height is around 50 m.

Additionally, XCSoar takes the position data of others around you from FLARM and draws “FLARM targets” on your moving map. Displaying climb rates of others, a classic XCSoar system aids in team flying. As long as reception is good, you do not have to call your mates whether their efforts in thermals are worth it or just for asking where they actually are. Last but not least, FLARM can bring in an IGC- approved logger. You will need this to participate in several contests, as the logger has been approved and sealed.

An XCSoar classic system also is club-glider friendly. If your club- gliders are equipped with a plug, intended for managing or download- ing from FLARM devices, you can connect with almost no intrusion in the glider’s instrumentation structure. Whatever you are willing to integrate in your XCSoar system, said functionalities of a classic system turn out to own a very good value / integration effort ratio.

Bring in an additional ADS-B receiver. With rapid market penetration of FLARM, a very welcome collision detection coverage in the glider scene is achieved already. However, this is not the case with pow- ered aircraft. If you want to have motorized targets to be depicted on your moving map, consider an ADS-B receiver on your integration list. Integrating a FLARM and an ADS-B receiver is a first example for integrating two sources of data. Possibly you need a multiplexer in case your hardware XCSoar runs on has only one communication

XCSoar User Manual

9.

INTEGRATION

Functionality

Application

XCSoar Tactic

Setup

Functionality

port. Either purchase a hardware multiplexer or use Bluetooth func- tionality. Most smartphones come with a Bluetooth built-in multiplex functionality. Another way is to achieve a Power FLARM device, al- ready equipped with a multiplexer for both FLARM and ADS-B data.

ADS-B stands for Automatic Dependent Surveillance - Broadcast. This radar based system broadcasts position of equipped aircraft even if they are not pinged by ground primary radar. If you plan to use such a device, please plan to do a careful system setup too. As long as you are not interested in commercial aircraft travelling in upper flight lev- els, you probably need no information about them on your map. Also, radar transponders are made as long range systems. Simply set up several filters in your system in order not to crowd your moving map.

Increased situation awareness support. However, many pilots judge ADS-B being information overkill as do many representatives of ground control organisations. Please take your time when reading discussions on ADS-B usage in gliders before purchasing hardware. Technically speaking ADS-B is brilliant as is FLARM.

Integrate an electronic variometer with your classic system, an eVario. Since an eVario is expected to be a second piece of hardware to be connected, you might need a data multiplexer for connecting both FLARM and eVario to your XCSoar hosting hardware. Take your time studying the hardware features of your eVario of interest. There are some devices selling which bring with them a multiplexer for merging GPS and other data from FLARM with their own measurements pre- sented on an output. Additionally a voltage converting power supply might be included on that output port, ready for supplying a “data plus power package” for your XCSoar hardware.

XCSoar’s tactical computations will give you valuable estimates of po- sitions in reach, provide heading, bearing and sophisticated informa- tion on times needed to reach waypoints and much more... With the actual wind vector being a very important value which those computa- tions rely on, an eVario will greatly improve XCSoar’s wind estimates by turning the “value” wind estimate to an actual wind “measurement” value (although the wind vector remains an estimate). Obviously, an eVario also will give you precision actual lift/sink measurements.

XCSoar User Manual

9.

INTEGRATION

Application

XCSoar Competition

Setup

Functionality

With all tactical computations being dependent on your actual esti- mates of MacCready and polar degradation, you might find synchro- nising your input to both, eVario and XCSoar useful. It is just a matter of setting up things to do so.

Get the best tactical data in flight a glider pilot can get. :-))

Put additional data files in your tactical system such as tasks and waypoint databases, amongst others. To input various file formats it might be necessary to involve a data converter. Additionally you might set up extra screen pages, covering competition related measures.

In case, a competition hosting / umbrella organisation alters task rules, there is a chance that something turns out to be done by XCSoar’s developers. Suddenly facing a newly introduced crude task rule, you develop awareness of a need for developer’s support urgently. At that moment the XCSoar organisation is perceived as being an important part of your XCSoar system.

Please input any important information to the XCSoar community promptly. All the developers will do their best keeping up with changes as are competition rules for example. But please keep in mind, XCSoar is an open source project, performed by volunteers. The earlier you provide information on changes, the better your chances in gaining support from the XCSoar community. Nevertheless, all said holds true for commercial suppliers as well.

The task files put in will ensure you are equipped with precise task data. No error-prone manual input.

The additional screen pages will give you InfoBox readings, related to several phases of the competition. Just to give you a clue, the InfoBox “Start open / close countdown” appears to be useless in all day flying situations? Put it on a screen page other than your standard ensemble.

Application

No comment.

XCSoar User Manual

9.

INTEGRATION

XCSoar Reference / Developer

Setup

Functionality

Application

Put in either component, not yet mentioned in your XCSoar setup. Please be aware, that the XCSoar project is targeting the best support of VFR type soaring possible. With inputting other functionality, you probably enter a space of ongoing experiments having attracted some attention in the XCSoar community. Especially when integrating an AHRS (Attitude Heading Reference System) system: You are handling non-certified components. ALL THINGS, JUST EVERYTHING you do with XCSoar software is at your own risk. With focusing on setups up to the tactical class of systems, the XCSoar community pays lot of attention to providing stable code (software). With some integration issues being rather exotic, you leave the field of primary focus. There might be too few users for providing a secure testing base for exotic features. Although, all the times XCSoar’s code itself is maintained for stability as long as you are involving released code.

Although not being the focus of every XCSoar user, you should follow the development process in order to get an up to date survey on additional functionality. There is a chance it might pay off. Just to give a few examples:

• With an AHRS type device you are able to use an artificial

horizon.

• RASP data are for lee wave pilots

• Additional airspace files, focusing on glider pilot’s needs.

• Hardware command input devices, provided by enthusiastic hard-

ware developers (there even were few cases, pilots involved gamepad hardware!)

• About possible future things: New components classes to be integrated under discussion might be transceivers, motor man- agement, transponders etc. (as of January, 2014)

Whenever you think of a new killer feature to be integrated or just want it all, set up a Reference / Developer XCSoar system. Additionally, feel deeply encouraged to test software previews or alpha/beta versions after having gained experience with XCSoar’s behavior. Help improve stability of software updates / upgrades, or provide some new code. In other words:

Think of the XCSoar project as being part of your passion for gliding and contribute. Please do not only follow this passion by soaring. Get involved in XCSoar’s development process and discover the power and

XCSoar User Manual

9.

INTEGRATION

beauty of the open-source credo. Doing so you will discover a close congeniality. A Reference / Development system is a worthy tool to become a member of the project.
