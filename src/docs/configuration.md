---
id: configuration
title: "Chapter 13: Configuration"
sidebar_position: 13
---

13 Configuration

XCSoar is a highly configurable glide computer and can be customised to suit a wide variety of preferences and user requirements. The entire configuration is saved in a so-called profile file, reflecting all configu- ration settings. Whenever a configuration is judged being worthy, a backup of the profile file is advisable (see Section 2.8. This chapter describes the configuration settings and options.

### 13.1 Scope of configuration

There are several ways XCSoar can be customised:

• Modifying configuration settings. This is the sort of configura- tion most likely to be performed by users; and this is given the greatest attention in this document.

• Changing the language, or even just to change the wording of

text in the user interface.

• Changing the button assignments and button menus. This allows the content and structure of the button menu to be changed.

• Changing or adding actions performed when glide computer

events take place.

• Defining how long status messages appear and sounds play when

those messages occur.

### 13.2 Modifying settings

There is a large set of configuration settings that may be customised from the settings dialogues accessible from the menu:

Config 2/3 (cid:46) System :

Config 2/3 (cid:46) Plane

Config 2/3 (cid:46) Devices

Invokes the main configuration dialogue for rather static set- tings. It is in no way intended to be accessed during flight. : Dialogue for specifying the plane’s data, with polar and wing loading representing the most important ones. This dialogue is to be included in the preflight check if the XCSoar base system is used in different planes.

: Configuration of devices connected to XCSoar. Although being a system setup dialogue, there might be rare occasions where this dialogue is required in-flight. Whenever connections to devices are lost, this dialogue might be used to reconnect. This dialogue neither was nor will be intended for use in-flight. Unfortunately, buggy operating systems of host hardware create a demand for it occasionally.

XCSoar User Manual

### 13.3 Configure System

Config 2/3 (cid:46) System

The system configuration can be accessed through a two layer struc- tured menu or just sequentially through the back and forward buttons.

You are strongly discouraged from changing these settings during flight. All changes to the settings should be performed on the ground so that their desired effect on the programs behaviour can be verified.

The settings dialogue contains several pages. Once changes have been made, click on the screen to close the dialogue and return to the configuration menu. Another button press leads back to the normal map mode.

Close

Once you are happy with your configuration settings, save the profile file and make a backup so that you can later restore the settings if your PDA’s memory is accidentally erased.

See Chapter 14 for a description of the data formats of files referred to in the settings. Where no file is to be used, the field can be left blank. File name fields in forms show files that match a file extension filter. This makes it much easier to find and select the correct file.

The main configuration dialogue (Setup System) can be run in Basic or Expert user level, via a selectable field on the left of the dialogue. When in Basic mode, many of the less commonly used and advanced configuration settings are hidden. In the descriptions below, all of the parameters marked with an asterisk are only visible in expert user level.

### 13.4 Site Files / Site Files

The dialogue specifies most of the important files that must be con- figured when flying at a new site.

XCSoar data path : The location for all of your XCSoar data on your hard drive, SD

card, or the PDA’s static memory.

XCSoar User Manual

Map Database : The name of the map file (XCM) containing digital elevation terrain data, topography, and optionally waypoints, airspace etc. A good prepared database file covers all the needs for this page.

Waypoints : List of waypoint files.

If left blank, waypoints are loaded from

the map file (if available).

Watched waypoints* : List of waypoint files containing waypoints for which arrival height is always displayed in map labels, even when unreachable. Useful for waypoints such as known reliable thermal sources (e.g., power plants) or mountain passes.

Airspaces : List of active airspace files that can be selected and used simul- taneously. If left blank, airspaces are loaded from the map file (if available).

Airfields or Waypoint details* : The airfields file may contain extracts from Enroute Supple- ments or other contributed information about individual air- fields.

Multiple files can be selected to be used simultaneously.

The XCM map database concept is the current way to setup a site to fly. XCSoar releases prior to v6.4 required each to be separate files and to be specified separately (as the ‘Terrain file’ and ‘Topography file’ respectively). This option has been dropped in favor to the XCM map database with XCSoar release v6.4.

The XCM map file, however, contains all these files: Terrain, topogra- phy and optionally waypoints and airspaces. If the latter are contained, the e.g. ‘Primary waypoint file’ may be left blank and the system will load waypoints from the map file. However, the user can still specify other files and they will be used instead of the data in the map file.

See Section 14.2 for more details on map files.

### 13.5 Map Display / Orientation

This page let you specify the favoured map orientation and view.

Cruise/Circling orientation : This determines how the screen is rotated with the glider, de-

pending on it’s current display mode. Track up: The moving map display will be rotated so the glider’s track is oriented up. The north arrow symbol points to true north. The glider symbol may be shown rotated ac- cording to the computed heading of the glider taking wind into account.

Heading up: The moving map display will be rotated so the

glider’s heading is oriented up. North up: The moving map display will always be orientated true north to south and the glider icon will be rotated to show its course (corrected for wind).

XCSoar User Manual

Target up: The moving map display will be rotated so the cur- rent target direction is oriented up. Wind up The moving map display will be rotated so the wind is always oriented top-down (might be useful for wave flying).

Circling zoom : This determines whether separate zoom levels will be maintained for circling and cruise modes. If enabled, then the map will zoom in automatically when entering circling mode and zoom out automatically when leaving circling mode.

Map shift reference : The direction according to the map will be displaced in order to

present a meaningful map section. None: Disable any adjustment. Track: Use a recent average of the ground track as basis. Target: Use the current target waypoint as basis.

Glider position offset : Defines the location of the glider drawn on the screen in percent

from the screen edge.

Max. auto zoom distance : The upper limit for auto zoom distance.

### 13.6 Map Display / Elements

This page provides options relating to screen elements overlayed to the map display.

Ground track : Display the ground track (ground track projection) on the map. The setting “Auto” displays the ground track only if there is a significant difference to plane heading.

FLARM traffic : This enables the display of FLARM traffic on the map.

Trail length* : Determines whether and how long a snail trail is drawn behind

the glider. Off: No trail is drawn. Long: A long trail is drawn (approx 60 minutes). Short: A short trail is drawn (approx 10 minutes). Full: A trail for the entire flight is drawn.

Trail drift* : Determines whether the snail trail is drifted with the wind when displayed in circling mode. Switched Off, the snail trail stays uncompensated for wind drift.

Trail type* : Sets the type of the snail trail display.

Vario #1: Within lift areas lines get displayed green and thicker, while sinking lines are shown brown and thin. Zero lift is pre- sented as a grey line. Vario #1 (with dots): The same colour scheme as the previ- ous, but with dotted lines while sinking. Vario #2: The climb colour for this scheme is orange to red, sinking is displayed as light blue to dark blue. Zero lift is pre- sented as a yellow line.

XCSoar User Manual

Vario #2 (with dots): The same colour scheme as the previ- ous, but with dotted lines while sinking. Altitude: The colour scheme corresponds to the altitude.

Trail scaled* :

If set to ON the snail trail width is scaled according to the vario signal.

Detour cost markers* :

If enabled this displays in cruise flight some figures projected in front of the nose of the glider icon. This is the additional distance in percent if you fly up the position of the figure and after that again straight towards the target, compared to the straight distance to target.

Aircraft symbol* : Sets the symbol used for the aircraft.

Simple: Simplified line graphics, a black glider shape with white contours. Simple (large): Enlarged simple graphics for better visibility on a small display. Detailed: Rendered aircraft graphics. HangGlider: Simplified hang glider as line graphics, white with black contours. ParaGlider: Simplified para glider as line graphics, white with black contours.

Wind arrow* : Determines the way the wind arrow is drawn on the map.

Off: No wind arrow is drawn. Arrow head: Draws an arrow head only. Full arrow: Draws an arrow head with a dashed arrow line.

FAI triangle areas : Whether to show FAI triangle areas on the map.

### 13.7 Map Display / Waypoints

This page provides options for how waypoints are displayed on the map.

Label format : This setting determines the label format displayed with each

waypoint. There are four different format options. Full name: The full name of each waypoint is displayed. First word of name: Only the first word (up to the first space) of the waypoint name is displayed. First 3 letters: The first 3 letters of the waypoint name are displayed. First 5 letters: The first 5 letters of the waypoint name are displayed. None: No name is displayed with the waypoint.

Arrival height* : This setting allows arrival height and/or required glide ratio to also be shown in labels for landable waypoints. See Section 4.5 for more information. None: Neither arrival height nor required glide ratio is displayed.

XCSoar User Manual

Straight glide: Straight glide arrival height (no terrain is con- sidered). (default option) Terrain avoidance glide: Arrival height considering any detour needed to avoid terrain. Straight & terrain glide: Both arrival heights. Required glide ratio: Glide ratio over the ground required to reach the waypoint. Required GR & terrain glide: Both required glide ratio and terrain avoidance glide arrival height.

For any option including terrain avoidance glide arrival height, the ’Reach mode’ setting (on the ’Glide Computer / Route’ configuration page, 13.13) must be set to ’Turning’.

Glide ratio will be shown whenever the aircraft is higher than the waypoint regardless of how shallow the glide is and regardless of which configured waypoint file contains the waypoint. Negative straight glide arrival heights, however, will only be shown for waypoints in the ’Watched waypoints’ file (selected on the ’Site Files / Site Files’ configuration page, 13.4). Negative terrain avoidance arrival heights will never be shown for any waypoints.

Also, if the ’Straight & terrain glide’ option is selected and only one arrival height (a positive one) is shown for a waypoint (e.g., ’Moontown:100m’), either no detour around terrain is needed or there’s interfering terrain and no possible detour will get you to the waypoint at an acceptable height (the configured safety ’Ar- rival height’ (13.10) above the ground at the waypoint). These are two very different situations safety-wise! Use other clues, like the reach line or the waypoint appearance (e.g., color), to determine which is the case in this scenario. Both arrival alti- tudes will be shown only if there’s a detour that will get you there at an acceptable height but a direct route is blocked by terrain. For example, ’Moontown:200/50m’ means (1) you could reach Moontown 200m above the minimum acceptable height if not for terrain that’s in your way but (2) there’s a detour that will get you there 50m above the minimum acceptable height. So in this case, you must detour, and the detour will cost you 150m (compared to if there were no terrain in your way).

Label style* : Labels for landables can be shown on a rounded rectangle with

white background, or with outlined letters.

Waypoint label visibility* : Controls which waypoints are displayed with names and arrival

altitudes on the map: All: All waypoint labels will be displayed. Task waypoints and landables: All waypoints part of a task and all landables will be displayed. Task waypoints: All waypoints part of a task will be displayed. None: No waypoint labels will be displayed.

XCSoar User Manual

Landable symbols : Three styles are available: Purple circles (WinPilot style), a high contrast style with icons, and icons with a traffic light colour scheme. See Section 4.5 for details.

Detailed landables* : Enabling details on landables displays instead of fixed icons vari-

able information like runway length and heading.

Landable size* : A percentage to select the size landables are displayed on the

map.

Scale runway length* : Enabling this option will display for detailed landables addition-

ally a scaled runway length based on real length.

### 13.8 Map Display / Terrain

This page sets how terrain and topography is drawn on the map win- dow. The effect of the changed terrain settings are directly visible at the small preview below.

Terrain display : Draws digital elevation terrain on the map.

Topography display : Draws topographical features (roads, rivers, lakes etc.) on the

map.

Terrain colours : Defines the colour ramp used in terrain rendering. Various schemes are available, which works best for you will depend on how mountainous your region is.

Slope shading* : The terrain can be shaded among slopes to indicate either wind direction, sun position or a fixed shading from North-West. Slopes faced to the wind (or sun) get displayed brighter and the averted slopes get darker.

Terrain contrast* : Defines the amount of Phong shading in the terrain rendering. Use large values to emphasise terrain slope, smaller values if flying in steep mountains.

Terrain brightness* : Defines the brightness (whiteness) of the terrain rendering. This

controls the average illumination of the terrain.

The available terrain colour schemes are illustrated in the table below.

XCSoar User Manual

Low Lands [m]

Mountainous [m]

ICAO [m]

Grey [m]

Imhof 4 [m]

Imhof 7 [m]

Imhof 12 [m]

Imhof Atlas [m]

### 13.9 Map Display / Airspace

This page is used to determine how the airspace information is dis- played and how warnings are issued.

Airspace display : Controls how airspace display and warnings are filtered based on altitude. The airspace filter dialogue also allows filtering of display and warnings independently for each airspace class. All on: All the airspace information is displayed at the same time. Clip: Only airspace below a user determined altitude is shown. Auto: Only airspace at the current altitude plus or minus a user definable margin is shown. All below: Like auto plus every airspace below the glider is shown.

Clip altitude : For clip mode, this is the altitude below which airspace is dis-

played.

XCSoar User Manual

Margin : For auto and all below airspace mode, this is the height above/be-

low which airspace is included.

Warnings : Determines whether warnings are enabled or disabled.

Warning time* : This is the time before an incursion is estimated at which the

system will warn the pilot.

Acknowledge time* : This is the time period in which an acknowledged airspace warn-

ing will not be repeated.

Use black outline* : Draws a black outline around each airspace.

Airspace fill mode* : Specifies the mode for filling the airspace area.

Fill all: Transparently fills the airspace colour over the whole area. Fill padding: Draws a solid outline with a half transparent bor- der around the airspace. Default: This selects the best performing option for your hard- ware. In fact it favours ‘Fill padding’.

Airspace transparency* :

If enabled, then airspaces are filled transparently.

This page also has Colours and Filter buttons which can be used to review or change the colours/patterns used by each airspace class, and whether each airspace class will be filtered out of warnings and/or display. Depending on the airspace transparency setting it is no longer needed to define patterns. The availability of transparency relies on the capabilities of the used hardware and may differ.

This function is used to determine the colours used to draw each class of airspaces.

First select the airspace class you wish to change. Then select the colour and pattern you wish the selected airspace class to be drawn in.

Colours

Filters

The filter function is described in Section 8.3.

### 13.10 Glide Computer / Safety Factors

This page allows the safety heights and behaviour for the alternates mode to be defined.

Arrival height : The height above terrain that the glider should arrive at for a

safe landing.

Terrain height : The height above terrain that the glider must clear during final

glide. See Section 6.8 for more details on the meanings of the safety

XCSoar User Manual

heights.

Alternates mode : Determines sorting of alternates in the alternates dialogue.

Simple: The alternates will only be sorted by arrival height. The first waypoint in the list is therefore the most reachable waypoint. Task: The sorting will also take the current task direction into account, such that the sort order is according to minimum extra distance travelled to the respective field and onwards to the task. Home: The sorting will try to find landing options in the current direction to the configured home waypoint. Similar to ‘task’ but with the home field as the desired destination.

Polar degradation* : A permanent polar degradation. 0% means no degradation,

50% indicates the glider’s sink rate is doubled.

Safety MC* : When safety MC is enabled, this MacCready setting is used for reach calculations, task abort, alternates and for determining arrival altitude at airfields.

STF risk factor* : The STF risk factor reduces the MacCready setting used to cal- culate speed to fly as the glider gets low, in order to compensate for risk. Set to 0.0 for no compensation, 1.0 scales MC linearly with height (with reference to height of the maximum climb). If considered, 0.3 is recommended. See Section 6.7 for more details.

### 13.11 Glide Computer / Glide Computer

This page allows glide computer algorithms to be configured.

Auto MC mode : This option defines which auto MacCready algorithm is used.

For more details see Section 6.13. Final glide: Final glide adjusts MC for fastest arrival. Trending average climb: Sets MC to the trending average climb rate based on all climbs. Both: Uses trending average during task, then fastest arrival when in final glide mode.

If enabled, the command speed in cruise is set to the MacCready speed to fly in no vertical air-mass movement. If disabled, the command speed in cruise is set to the dolphin speed to fly, equiv- alent to the MacCready speed with vertical air-mass movement.

Block speed to fly* :

Nav. by baro altitude* : When enabled and if connected to a barometric altimeter, baro- metric altitude is used for all navigation functions. Otherwise GPS altitude is used.

Flap forces cruise* : When this option is enabled, causes the flap switches in Vega to force cruise mode when the flap is not positive. This means that when departing a thermal, switching to neutral or negative

XCSoar User Manual

flap will immediately switch XCSoar’s mode to cruise mode. Similarly, for Borgelt B50 systems, the speed command switch forces XCSoar’s climb or cruise mode.

GR Average period* : Average efficiency is always calculated in real-time. Here you can decide on how many seconds of flight this calculation must be done. The real distance covered second by second in this period is divided by the final difference of altitude. So if for ex- ample you go and return back to the same point after 2 minutes, and you have set 2 minutes as period, average GR will consider the total distance covered in those two minutes, and not the distance between your position 2 minutes before and your cur- rent position, that in this case could be almost zero! Normally for gliders a good value is 90-120 seconds, and for paragliders 15 seconds. Lower values will give as a result pretty much the same as GR Instant, while higher values will look like GR Cruise. Other commercial instruments and software use 2 minutes.

Predict wind drift* : Accounts for drifting with the wind while circling to gain any altitude needed to reach final glide path altitude. On by de- fault. This affects any displayed altitude difference (e.g., the final glide bar and altitude difference InfoBoxes). For upwind destinations, it makes the displayed altitude difference more neg- ative; for downwind destinations, it makes it less negative (less climbing needed). The assumed circling climb rate equals the current MacCready setting (MC). If the current MC is zero, no circling is assumed, and the value shown is the same as if ’Predict wind drift’ were ’Off’.

### 13.12 Glide Computer / Wind

This page sets the base for wind computations.

Auto wind : This allows switching on or off the automatic wind algorithm.

Manual: When the algorithm is switched off, the pilot is re- sponsible for setting the wind estimate. Circling: Circling mode requires only a GPS source. ZigZag: ZigZag requires an intelligent vario with airspeed out- put. Both: Uses Circling and ZigZag.

Prefere external wind :

If enabled, the wind vector received from external devices over- rides XCSoar’s internal wind calculation.

### 13.13 Glide Computer / Route

This page allows control over glide reach calculations and route opti- misations.

Route mode : This controls which types of obstacles are used in route planning.

Please have a look at Section 4.14 for a detailed description.

XCSoar User Manual

Route climb* : When enabled and MC is positive, route planning allows climbs between the aircraft location and destination.

Route ceiling* : When enabled, route planning climbs are limited to ceiling de- fined by greater of current aircraft altitude plus 500 m and the thermal ceiling. If disabled, climbs are unlimited.

Reach mode : How calculations are performed of the reach of the glider with

respect to terrain. Off: Reach calculations disabled. Straight: The reach is from straight line paths from the glider. Turning: The reach is calculated allowing turns around terrain obstacles.

Reach display : This determines whether the glide reach is drawn as a line resp.

a shade on the map area.

Reach polar* : This determines the glide performance used in reach, landable

arrival, abort and alternate calculations. Task: Uses task MacCready value; Safety MC: Uses safety MacCready value.

### 13.14 Gauges / FLARM, Other

FLARM radar : This enables the display of the FLARM radar gauge. The track bearing of the target relative to the track bearing of the aircraft is displayed as an arrow head, and a triangle pointing up or down shows the relative altitude of the target relative to you.

Auto close FLARM* : This will close the FLARM radar view when all FLARM traffic

has gone.

Thermal assistant : Enables the display of the ThermalAssistant gauge.

Thermal band : Enables the display of the thermal profile (climb band) overlay

on the map.

Final glide bar MC0* :

If set to ON the final glide bar will show a second arrow indi- cating the required altitude to reach the final waypoint at MC zero.

In all FLARM environments, the colour of the target indicates the threat level.

### 13.15 Gauges / Vario

This page bundles all details to the vario-gauge and is entirely classified as expert setup.

Speed arrows* : Whether to show speed command arrows on the vario gauge. When shown, in cruise mode, arrows point up to command slow down; arrows point down to command speed up.

XCSoar User Manual

Show average* : Whether to show the average climb rate.

In cruise mode, this

switches to showing the average net airmass rate.

Show MacCready* : Whether to show the MacCready setting.

Show bugs* : Whether to show the bugs percentage.

Show ballast* : Whether to show the ballast percentage.

Show gross* : Whether to show the gross vario value.

Averager needle* :

If true, the vario gauge will display a hollow averager needle. During cruise, this needle displays the average net value. During circling, this needle displays the average gross value.

### 13.16 Gauges / Audio Vario

This page bundles all details to the audio vario-gauge.

Audio Vario : Enable/Disable the audio variometer.

Volume : Set the volume of the variometer sounds.

Enable Deadband : Enable/Disable the mute for audio output when the current lift

is in a certain range around zero.

Min. Frequency* : The tone frequency that is played at maximum sink rate.

Zero Frequency* : The tone frequency that is played at zero climb rate.

Max. Frequency* : The tone frequency that is played at maximum climb rate.

Deadband min. lift* :

If the deadband feature is enabled the vario will play sounds when the climb rate is below this threshold.

Deadband max. lift* :

If the deadband feature is enabled the vario will play sounds when the climb rate is above this threshold.

### 13.17 Task Defaults / Task Rules

Task rules may be defined to limit valid starts according to competition rules.

Start max. speed* : Maximum speed allowed in start observation zone. Set to 0 for

no limit.

Start max. speed margin* : Maximum speed above maximum start speed to tolerate. Set

to 0 for no tolerance.

Start max. height* : Maximum height above ground while starting the task. Set to

0 for no limit.

Start max. height margin* : Maximum height above maximum start height to tolerate. Set

to 0 for no tolerance.

XCSoar User Manual

Start height ref.* : Reference used for start max. height rule.

MSL: Reference is altitude above mean sea level. AGL: Reference is the height above the start point.

Finish min. height* : Minimum height based on finish height reference (AGL or MSL)

while finishing the task. Set to 0 for no limit.

Finish height ref.* : Reference used for finish min. height rule, correspondingly to

the start rule height reference.

PEV start wait time* : The default interval in minutes between the pilot presses the If set Pilot Event (see 4.10) button and start window opens. to 0, the start will open immediately after Pilot Event button is pressed.

PEV start window* : The default interval in minutes during which the start window remains open when Pilot Event (see 4.10) start procedure is used. If set to 0, the start window, once opened, remains open forever.

Contest : Determines the rules used to optimise for the selected contest

paths. OLC FAI: Conforms to FAI triangle rule. Three turns and com- mon start and finish. For tasks longer than 500 km, no leg less than 25% or larger than 45%; otherwise no leg less than 28% of total. Finish height must not be lower than start height less 1000 m. OLC Classic: Up to seven points including start and finish, fin- ish height must not be lower than start height less 1000 m. OLC League: A contest on top of the classic task optimisa- tion, cutting a 2 hours segment over max. 3 of the turns. Finish height must not be below start height. OLC Plus: A combination of Classic and FAI rules. 30% of the FAI score are added to the Classic score. DMSt: Deutsche Meisterschaft im Streckensegelflug. XContest: DHV-XC: SIS-AT: WeGlide FREE: WeGlide combines multiple scoring systems in the WeGlide Free contest. The free score is a combination of the free distance score and the area bonus. For the area bonus, the scoring program determines the largest FAI triangle and the largest Out I& Return distance that can be fitted into the flight route. WeGlide O&R: A start point, one turn point and a finish point are chosen from the flight path such that the distance between the start point and the turn point is maximized.

Predict Contest :

If enabled, then the next task point is included in the score calculation, assuming that you will reach it.

XCSoar User Manual

### 13.18 Task Defaults / Turnpoint Types

This page allows to set default turnpoint types used by the task editor. All options are well described for the task manager in Chapter 5.

### 13.19 Look / Language, Input

This page allows to customise the way the user controls and interacts with XCSoar.

Events* : The Input Events file defines the menu system and how XCSoar

responds to button presses and events from external devices.

Language : The language options selects translations for English texts to other languages. Select English for a native interface, Auto- matic to localise XCSoar according to the system settings; or you may select one of the two character language short cuts directly.

Status message* : The status message file can be used to define sounds to be played when certain events occur, and how long various status messages will appear on screen.

Menu timeout* : This determines how long menus will appear on screen if the user does not make any button presses or interacts with the computer.

Text Input Style* : Determines which style for text entries is used. See Section 3.8 for further information on textual input. HighScore Style: For entering text you have to change the underlined character to the relevant letter. Keyboard: Uses the on-screen keyboard for entering text. Default: Uses the default input style for your platform.

Haptic feedback* :

(Android devices only) Let you switch on or off the ‘brrt’ when the device accepts your finger press as valid input on the touch- screen.

Press the

Fonts button to adjust the fonts XCSoar uses.

Font Configuration

This page enables customisation of fonts in various fields of the pro- gram.

Once the customisation is enabled, the Edit buttons allow to change some parameters (font face, height, bold and italic) of the chosen font.

If customisation is disabled, default fonts will be used.

### 13.20 Look / Screen Layout

This page once more details the appearance of the graphical user interface of XCSoar.

XCSoar User Manual

InfoBox geometry : A list of possible InfoBox layouts. Do some trials to find the best for your screen size. The preceding number refer to the total number of InfoBoxes of this geometry.

FLARM display* :

In case you enabled the FLARM display this is to configure the place on the screen, where the tiny radar window appears. As a default an ‘Auto’ setup is possible, which means that the radar window will overlay the InfoBoxes, and not the map part of the screen.

Tab dialogue style : Determines whether tabbed dialogues use text or icons.

Message display* : Defines the alignment of the status message box, either Center

or in the TopLeft corner.

Dialogue size* : Determines the display size of dialogues.

Inverse InfoBoxes* :

If On, the InfoBoxes are white on black, otherwise black on white.

Colour InfoBoxes* :

If On, certain InfoBoxes will have coloured text. For example, the active waypoint InfoBox will turn blue when the glider is above final glide.

InfoBox border* : Two styles for InfoBox borders are available.

Box: Draws boxes around each InfoBox. Tab: Draws a tab at the top of the InfoBox across the title.

Cursor size : Control the size of the cursor. Default is 1. Only available if

cursor is drawn by XCSoar.

Black cursor : Use black instead of white cursor. Default is Off (white cursor).

Only available if cursor is drawn by XCSoar.

### 13.21 Look / InfoBox Pages (or just Pages)

This page allows the definition of the screen page ensemble. A typical setup will contain three pages, the expert can pile up to eight possible pages.

A page is more or less a composition of map and InfoBox set. There are five predefined pages for circling, cruise, final glide, a map only page and a page with automatic InfoBox set activation depending on your flight mode.

Additionally you can choose from up to five more pages that are com- posed from map and your custom InfoBox sets.

Page 1..3 : Select what you feel is appropriate for you to appear on page

1,2,3 etc. Selecting “- - -” will make the page inactive.

Page 4..8* : Experts can configure up to eight pages in the already described

manner.

XCSoar User Manual

### 13.22 Look / InfoBox Modes (or InfoBox Sets)

This page shows and let you customise the available InfoBox sets.

Circling, Cruise, ... : There are three predefined InfoBox sets (Circling, Cruise, Final Glide). Additionally you can define up to five more InfoBox sets and name them as you want. By default they are named AUX-1, AUX-2, and so on. Selecting one of the sets starts a dialogue which provides all means to name and compose an InfoBox set up to your needs.

Use final glide mode : Controls whether the “final glide” InfoBox mode should be used

on “auto” pages.

InfoBox Set Customisation

Name : Sets the name of the currently customized InfoBox set. The

button starts the text input dialogue of XCSoar.

InfoBox : The number identifying the current box.

Content : Select the information you want to see in the current box.

The right side of the dialogue always gives the overview on the com- posed set. When composing at the PC you can use the mouse to select the individual boxes right from the overview.

See Section 12 for a description of the InfoBox types and their mean- ings.

To change a set press on one of the InfoBoxes labeled with it’s current content. The InfoBoxes are numbered; the location of the InfoBoxes depends on the screen layout. The tables below show the InfoBox enumeration scheme for the landscape and portrait screen layout.

### 13.23 Setup / Logger

The internal software logger has adjustable time steps, separate for cruise and circling modes. Typically the circling time step is set to a smaller value than cruise in order to give good quality flight logs for replay purposes.

Pilot name : This is the pilot name used in the internal software logger dec-

laration.

Time step cruise* : This is the time interval between logged points when not circling.

XCSoar User Manual

Time step circling* : This is the time interval between logged points when circling.

Auto logger* : Enables the automatic starting and stopping of the logger on takeoff and landing respectively. Disable when flying paragliders to prevent the low ground speeds from triggering the automatic logger.

NMEA logger* : Enable the NMEA logger on startup? If this option is disabled,

the NMEA logger can still be started manually.

Log book* : Logs each start and landing.

Logger ID : This is the logger registration.

### 13.24 Setup / Units

This page allows you to set the units preferences used in all displays, InfoBoxes, dialogues and input fields. For most users hopefully one of the presets will match the needs. The presets include unit sets for American, Australian, British, and European.

Separate selections are available for all items. Once you changed a given preset it will be referenced as ‘Custom’ set and will also be stored in your profile.

Aircraft/Wind speed* : Units used for airspeed and ground speed: mph, knots, km/h.

A separate unit is available for task speeds.

Distance* : Units used for horizontal distances e.g. range to waypoint, dis-

tance to go: sm, nm, km.

Lift* : Units used for vertical speeds (variometer): knots, m/s, ft/min.

Altitude* : Units used for altitude and heights: ft, m.

Temperature* : Units used for temperature: ◦C, ◦F.

Task speed* : Units used for task speed: mph, knots, km/h.

Pressure* : Units used for pressures: hPa, mb, inHg.

Lat./Lon.* : Units, or better formats used for latitude and longitude. Sup- ported are several ‘degree/minutes/seconds’ formats, respec- tively their decimal fraction, and the UTM WGS 84 format.

### 13.25 Setup / Time

Set the local time offset with respect to UTC.

UTC offset : The field allows the UTC local time offset to be specified.

Local time : The local time is displayed below in order to make it easier to verify the correct offset has been entered. Offsets to the half- hour may be set.

XCSoar User Manual

Use GPS time* : This option, if enabled sets the clock of the computer to the GPS time once a fix is set. This is only necessary if your computer does not have a real-time clock with battery backup or your computer frequently runs out of battery power or otherwise loses time.

### 13.26 Setup / Tracking

‘Live’-Tracking means using a GPS to determine your position and a mobile network to send this position in real-time to a server, other people can see your exact position and track presented in a map just in time. The tracking option needs the capability to connect to mobile networking as offered by your glide computer.

Currently there are two tracking protocols implemented. ‘SkyLines’ as a spin off project from XCSoar itself; for details on this service have a look at https://skylines.aero. And also the ‘LiveTrack24’ proto- col used e.g. by the tracking portal on http://www.livetrack24. com. Please consult the web pages of the service provider listed under ‘Server’ for details on this setup.

SkyLines : Switch this On to enable the live stream of your position to

‘SkyLines’.

Tracking Interval : The time interval for which one position is sent to the tracking service. ‘SkyLines’ implements a very lean protocol, so that even a 30 sec. interval does not exhaust a plain GPRS connection (ca. 12 kbit/sec).

Key : Create a key on the page https://skylines.aero/tracking/ info and enter it here, to identify your positions at the tracking service.

LiveTrack24 : Switch this On to enable the live stream of your position to

‘LiveTrack24’.

Tracking Interval : The time interval for which one position is sent to the tracking

service.

Vehicle Type : Type of vehicle used.

Server : The service’s web address to stream your position to. There is

currently a choice of some predefined.

Username :

If you created an account you can enter those credentials here. Otherwise the track will be logged as ‘guest’ and thus be anony- mous.

Password : The password to your tracking account.

XCSoar User Manual

### 13.27 Configure Plane

Config 2/3 (cid:46) Plane

This dialogue allows the glide polar to be defined. For a large variety of glider types XCSoar provides a predefined glide polar, they could be modified if needed, or you can load your own polar from a file. The file format is based on the WinPilot polar file format (see Section 14.6).

To configure the glide computer to the performance of a glider type start with the selection of a type from the Import when you want to load an external polar file. Customise the three V/W points defining the parabola curve and the reference weight to your needs. Be aware that namely those four items are of crucial importance for every glide performance relevant computation of XCSoar. Export your efforts to a file: always a good idea.

. Choose

List

Polar V/W : Three pairs of corresponding horizontal and vertical speed of the glider. A good choice for the point triplet is one at the top most area of the polar, the second at a still very curved area and the third far out where the curvature seems to disappear.

Reference mass : Reference weight at which the given polar is valid.

Dry mass : The complete weight of the rigged glider including the pilots In the absence of a weight except the loaded water ballast. configurable pilot weight XCSoar expects you to include your own weight to the dry mass.

Wing area : Optional specification of the wing area of the glider type.

V rough air : Optionally the maximum manoeuvring speed can be entered on this page to prevent the glide computer from commanding unrealistic cruise speeds.

Handicap : The handicap factor used for the On-Line Contest scoring.

Max. ballast : Optional the amount of water ballast XCSoar refers to as 100%

ballast. Set to zero if it does not apply.

Dump time : The time in seconds needed for dumping full ballast.

### 13.28 Configure Devices

Config 2/3 (cid:46) Devices

The Devices page is used to specify the ports used to communicate with the GPS and other serial devices. The default settings are COM1 and 4800 bits per second. When connected to the Vega intelligent variometer, the settings should be COM1 and 38400.

Four devices can be configured (device A through D). One, for exam- ple, can be connected to a GPS and another to a second device such as a variometer. If there is no further device, set the unused ports to ‘Disabled’. XCSoar will then ignore those ports.

COM ports 0 to 10 may be used, including a TCP/IP connection. Which COM port is appropriate for you depends on what brand of PDA

XCSoar User Manual

you use, and the communications medium (serial cable, Bluetooth, virtual COM port, SD card or CF based GPS, internal GPS). Detailing the various options for different devices is beyond the scope of this document. If you have trouble identifying which COM port to set, please refer to the XCSoar website and mailing lists.

Port : This setting maps an existing interface (port) of your glide com-

puter to one of the available slots A to D.

Baudrate : Set this to the communication speed of the connected device.

TCP Port : This setting is useful to e.g. connect to the Condor flight simu- lator and do some XCSoar training in winter time.

Bulk baud rate : The baud rate used for bulk transfers, such as task declaration or flight download. The item is visible for those devices that support the feature.

Driver : The specific type of device can be selected from a list in order to enable support for devices with proprietary protocols or special functions.

Sync. from device* : This option lets you configure if XCSoar should use settings like

the MacCready value, bugs and ballast from the device.

Sync. to device* : This option lets you configure if XCSoar should send settings

like the MacCready value, bugs and ballast to the device.

Ignore checksum* :

If your GPS device outputs invalid NMEA checksums, this will allow it’s data to be used anyway.
