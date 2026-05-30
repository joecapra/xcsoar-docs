---
id: atmosphere-and-instruments
title: "Chapter 7: Atmosphere and Instruments"
sidebar_position: 7
format: md
---

7 Atmosphere and Instruments

### 7.1 Variometer

XCSoar maintains an internal model of the atmosphere based on statis- tics gathered from the flight path and other connected devices. These statistics and measurements are approximate and the weather can on some days change rapidly. The pilot should at all times keep observ- ing the weather. In particular, when out-landing in fields, the pilot should look for indicators on the ground to confirm wind strength and direction.

A needle-dial style display shows the variometer measurements. The gross variometer reading drives the main arrow on the dial, and in the centre of the dial the instantaneous measurement is shown as text. Additionally, speed command arrows (chevrons) appear above or below the gross variometer measurement. Chevrons pointing up indicate slowing down is recommended. Chevrons pointing down indicates that speeding up is recommended.

When the averager value is displayed, the value shown is the average gross climb rate over the previous 30 seconds when in circling mode, and the netto (airmass) vertical speed over the previous 30 seconds when in cruise mode.

13.15

The average value can also be displayed as an optional additional needle (caret). The vario gauge is customisable as to what is displayed along with the gross value etc.

When an intelligent variometer is connected to XCSoar, the needle displays data from the instrument; otherwise it produces variometer estimates based on GPS vertical speed, which is slow and uncompen- sated for aircraft total energy.

The MacCready value, bugs and ballast, optimum speed to fly and wind data are transferred between XCSoar and supported external intelligent variometers. In the ideal setup, both XCSoar and the var- iometer have a consistent perspective on the flight at all times; and that by adjusting the MacCready setting on one device should be kept in sync with the other, by the software and to not require additional input from the pilot.

Pilots abuse the device synchronisation (see Section 13.28) for various reasons. You may have different MacCready settings on PDA and intelligent vario to cross-check the results. You may do computations with different ballast settings and cross-check the results. You may

XCSoar User Manual

### 7.2 Audio Variometer

choose on one of the devices manually a different wind setting and cross-check the results, etc.

A list of supported variometers is maintained in Section 2.5.

For Vega: A small icon displaying a circling glider is displayed when the variometer is in climb audio mode.

In addition to the variometer display XCSoar provides an acoustic variometer which transfers the variometer measurements into sounds. The audio variometer is for now only available on Android devices. For proper performance connect your device to a barometric sensor or use the internal one of your Android device if provided. The audio vario is enabled/disabled via the gauges configuration in the configuration.

### 7.3 Air data inputs

Where additional aircraft dynamics or air mass data are provided by an intelligent variometer, XCSoar can often make use of it or display it in a separate InfoBox. Key sensor measurements that XCSoar uses include:

Gross total energy variometer :

(rate of change of the total energy of the aircraft) Used for display, and for calculation of netto variometer.

Netto variometer :

(estimated vertical velocity of the air mass at the aircraft) Used to for display, and to colour the snail trail so that it may effec- tively show areas of lift and sink.

Aircraft acceleration :

(load factor) Used for netto variometer calculations where an external netto variometer is not provided.

Barometric altitude : Used for display

Indicated airspeed : Used for display, in compensating final glide calculations for air- craft kinetic energy, and in netto variometer calculation where an external netto variometer is not provided.

Air density : Used for calculating true airspeed from indicated airspeed.

### 7.4 Wind display

A continuous display of wind strength and direction is provided on the map. The wind information is derived from the gliders wind drift during thermal flight (climb mode).

The wind direction and speed are displayed as a wind vector on the moving map display and optionally in numeric form in the data display fields. The length of the vector indicates the wind magnitude, and this magnitude is also displayed near the wind vector.

XCSoar User Manual

The wind data is one of many data sources used to calculate final glide information. It is possible to manually adjust the wind used in all calculations.

### 7.5 Wind estimation

XCSoar offers two ways of estimating wind during flight.

Circling : This method uses GPS position fixes to estimate the wind based on drift, typically while thermalling; and is available on all XC- Soar installations. To improve wind calculations, airspeed and rotation rate measurements are also used, if available.

Zigzag : This method uses GPS position fixes and true airspeed measure- ments to estimate the wind, typically during cruise. It is only available where XCSoar is connected to an intelligent variometer that outputs true airspeed.

The wind magnitude and direction can also be adjusted manually from the wind settings dialogue (see below).

Statistics are gathered so that winds are recorded at different altitudes and times. When the glider’s altitude changes significantly, the statis- tics are consulted to determine the best estimate of the wind based on previous measurements.

For PC with touchscreens, you can also do this by highlighting the wind InfoBox and using the cursor keys (up and down increase and decrease the magnitude, left and right rotate the wind direction).

13.12

The configuration settings dialogue allows control of which estimation method is used for wind updates, via the field ‘Auto Wind’:

• Manual

• Circling

• Zigzag

• Both (Zigzag and Circling)

XCSoar User Manual

When wind estimates change significantly, a status message notifica- tion of this is issued.

Circling wind algorithm

XCSoar estimates the wind magnitude and direction when circling. It does this using a sophisticated algorithm that incrementally improves the wind estimate from completed turns. Poor quality turns, where the bank angle changes significantly, are rejected or have minimal im- pact on the overall wind estimate. The best turns are those with If values from the airspeed measurement are constant bank angle. available, i.e., a corresponding instrument is connected, speed varia- tions during circling are compensated for. If a gyroscope (IMU sensor) is connected, changes in bank angle and changes in turn rate can be detected, and the circles in question will be excluded from the wind calculation.

Estimates are only obtained if the average GPS fix rate is better than one every two seconds. This results in improved fidelity of estimates in the presence of GPS dropouts.

For aircraft fitted with intelligent variometers connected to XCSoar, a so-called ‘zigzag’ wind estimation algorithm is available. With this algorithm, the wind estimate can be updated continuously during long glides without circling.

This allows the wind estimate to be updated during cruise while the air- craft performs a zigzag manoeuvre. No specific manoeuvre is required, in many cases the estimate will be updated as the aircraft’s heading changes naturally as the pilot hunts for lift. In general, however, the technique requires the aircraft heading to change over 40 degrees.

If the wind changes significantly while in straight flight, the zigzag algorithm is used to update the wind estimate even if the aircraft’s heading does not change much. This provides greater accuracy in long final glides.

Wind estimates are updated when a large difference between the es- timated ground speed and the true ground speed are detected even without much zigzag manoeuvring.

For aircraft fitted with intelligent variometers and digital compasses connected to XCSoar, a wind estimation algorithm making use of mag- netic heading and airspeed is being developed. This provides another method of updating the wind estimate during cruise and does not require zigzag manoeuvres.

Zigzag algorithm

Compass algorithm

XCSoar User Manual

### 7.6 Wind settings dialogue

Config 1 (cid:46) Wind

The wind dialogue allows the initial estimate of the wind speed and direction to be entered, usually prior to flight.

### 7.7 Thermal profile

At any time during flight, the pilot can make corrections to the wind estimate by entering the correction in the wind settings dialogue. Once the dialogue gets closed, the internal estimate is ignored until a new internal estimate is obtained from the circling or zigzag algorithm.

The automatic wind algorithm may also be switched on or off (or between modes) in this dialogue. See Section 7.5 for details on these algorithms.

The compensation of wind drift of the snail trail can also be switched on or off in this dialogue. See Section 4.8 for details on how this affects the display of the snail trail.

Statistics on climb rates in thermals are collected and displayed in a thermal band meter. This is shown above the final glide difference bar on the left side of the map display. It is not shown when the glider is above final glide.

The thermal band meter shows a graph, where the vertical axis is height above the break-off height (Section 6.8), and is scaled according to the maximum altitude achieved. The horizontal axis is the average climb rate achieved at a particular altitude band. The horizontal axis is scaled according to the MacCready setting, and an arrow indicating this setting, and the glider’s current altitude is overlaid on the shaded area. This scaling and arrow makes it easy to see how the pilot’s MacCready setting compares with achieved thermals and to plan the desired working height band.

When cruising between thermals, the vertical position of the arrow, indicating the glider’s height relative to the thermal band, can be used as a reference to suggest how urgent it is to find the next thermal. As the arrow approaches the bottom of the band, then the glider is nearing the break-off height and the pilot should consider taking even a weak thermal.

XCSoar User Manual

### 7.8 Thermal locator

An algorithm estimates the centre of the lift when circling. The ther- mal marker symbol is a green circle with a spiral.

The thermal locator marks the location of the last 20 thermals on the map with the thermal symbol during cruise.

This location is calculated to compensate for the thermal drift at the glider’s altitude. This means that internally XCSoar remembers the location of the thermal source on the ground. In other words, if you leave a thermal at the top and later return at low altitude, the position on the map shows the predicted location of the thermal at that low altitude (which is further upwind than the top).

If the wind changes and the thermal source is still active, its position on the map reflects the wind change; that is, the thermal at altitude will be projected downwind at the new wind estimate.

### 7.9 Thermal assistant

13.14

The thermal assistant is a graphical aid to maximise the exploitation of the given thermal updraft. If it is configured “On” the small polar diagram is mapped to the lower left corner of the screen. A single tap on the small diagram enlarges it to a full-screen view.

The polar diagram shows the climb rate over the circular course of the glider. The screen-shots show a right circle, where the glider position is fixed to the left side, and the polar distribution of the climb rate is shown relatively to the current glider position.

XCSoar User Manual

The two screen-shots are taken in a few seconds sequence to demon- strate the practical usage of the rotating climb diagram. A simple recipe to optimise the climb rate according to the assistant would be to follow these two steps repeatedly:

1. : At the moment, the maximum peak on the polar diagram passes the top of the display; that is a quarter of the circle before you reach that part again: Open the circle a bit to displace the circle centre in the direction of the strongest climb rate.

2. : At the moment, the maximum peak on the polar diagram passes the gliders position; the vario should show the maximal climb rate: Narrow the circle as much as possible to centre the thermal updraft at its maximum.

It must be said, that the interpretation of the thermal assistant always relays on the specific lag of the connected sensor and PDA itself. A successful updraft optimisation will thus depend on a bit of training to take the lag into account.

### 7.10 Convection forecast

If the glider is equipped with an outside temperature and humidity probe, a simple convection forecast system estimates the convection ceiling and the cloud base. The humidity probe is optional and is mainly required for estimating cloud base.

Prior to takeoff or during flight the pilot can modify the maximum forecast temperature on the ground, by adjusting the value in the “Forecast Temperature” InfoBox.

The forecast convection ceiling is determined by the altitude at which the atmospheric temperature equals the maximum forecast tempera- ture on the ground, cooled adiabatically as it rises according to the dry adiabatic lapse rate. Typically, the glider will not climb as far as the convection ceiling and so the measured values are extrapolated to

XCSoar User Manual

find the ceiling. If the atmosphere is stable, the convection ceiling is reported as zero altitude.

The maximum forecast temperature on the ground is entered using the flight settings dialogue described in Section 6.4.

The forecast cloud base is determined by the altitude at which the dew point intersects the maximum forecast temperature on the ground, cooled adiabatically as it rises according to the dry adiabatic lapse rate. If no clouds are forecast, the cloud base is reported as zero.

### 7.11 Analysis dialogue

Info 1 (cid:46) Analysis

The analysis dialogue is used to see several aspects of the atmosphere.

Several pages of interest:

Wind at altitude : This shows a graph of the wind speed versus altitude, and shows

the wind vector at several altitudes.

The ‘Set wind’ button opens the wind settings dialogue (e.g. to manually set the wind).

Temperature trace : This page is only available if a supported instrument is con- nected to XCSoar that produces outside air temperature and humidity. The chart shows the variation of dry air temperature, dew point temperature and outside air temperature with alti- tude. The convection forecast is summarised as the estimated thermal convection altitude and estimated cloud base.

XCSoar User Manual

The climb history and barograph pages, described in Section 5.16, are also useful to determine trends in the soaring conditions.

### 7.12 Weather, METAR / TAF

Info (cid:46) Weather

If the hardware hosting XCSoar is able to connect to the internet, weather reports and forecasts can be downloaded. Present actual informations available are depicted by a little flag, pinned to the way- point of the reporting station. To set up reports and forecasts, invoke the METAR and TAF dialogue. With a filtering screen for ICAO codes comes up. After typing and pushing OK another sta- tion is added to the list. Accessing the information is either possible via selecting an airport and pushing Details on the same screen or by touching the map invoking the “Map elements at this location” dialogue. The dialogue will show airports, airspaces……and weather If the flags are missing on the map, no actual information is data. available. Invoke the info dialogue and touch Update .

Add

### 7.13 Weather forecast, RASP

Regional Atmospheric Soaring Prediction (RASP) is intended to pro- vide detailed graphical weather forecasts for soaring purposes. For fur- ther details the pilot is invited to consult http://www.drjack.info on how RASP forecasts work, from where they are available, and their use and limitations. RASP forecasts use a specialized forecast model with a particular focus on boundary layer (BL) meteorology and con- vective processes.

You can find a list of available RASP forecasts at http://www. drjack.info/RASP. These are provided by various independent soar- ing and paragliding enthusiasts. Please note that some of these links provide data in-season only, and only some of these providers make data available in XCSoar format.

XCSoar User Manual

You can either install RASP data files yourself, or use XCSoar’s built- in automatic download for many regions worldwide via the ’Site Files / Site Files’ configuration page, 13.4.

The files have .dat extension and the information is shown as colour- coded terrain overlays on the map.

Make sure that terrain display is set to “on”.

Info (cid:46) Weather

The RASP-forecast overlays are invoked via menu Info .

The Field setting determines which data field is displayed on the map. The Time setting determines at which forecast time the data field will be displayed. Upon entering the weather dialogue, the Time setting is advanced to the next nearest forecast time available in the RASP file. When a field is not available in the RASP file, the background is left blank.

The current field name is displayed in the lower left corner of the screen whenever RASP data is displayed.

The available fields can vary by data source. Some examples include:

W* : Average dry thermal updraft strength near mid-BL height. Sub- tract glider descent rate to get average vario reading for cloud- less thermals. Updraft strengths will be stronger than this fore- cast if convective clouds are present, since cloud condensation adds buoyancy aloft (i.e. this neglects “cloudsuck”). This value depends upon both the surface heating and the BL depth.

BL wind spd : The speed and direction of the vector-averaged wind in the boundary layer.This prediction can be unreliable if there is large wind shear through the BL.

XCSoar User Manual

H bl : Altitude of the top of the mixing layer, which for thermal con- vection is the average top of a dry thermal. Over flat terrain, maximum thermalling heights will be lower due to the glider de- In the presence of clouds (which scent rate and other factors. release additional buoyancy aloft, creating “cloudsuck”) the up- draft top will be above this forecast, but the maximum ther- malling height will then be limited by the cloud base. Further, when the mixing results from shear turbulence rather than ther- mal mixing this parameter is not useful for glider flying.

dwcrit : This parameter estimates the height above ground at which the average dry updraft strength drops below 225 fpm (1.1 m/s). This is expected to give better quantitative numbers for the maximum cloudless thermalling height than the BL Top alti- tude, especially when mixing results from vertical wind shear rather than thermals. (Note: the present assumptions tend to underpredict the max. thermalling height for dry conditions) In the presence of clouds the maximum thermalling height may instead be limited by the cloud base.

hwcrit : Same as dwcrit, but giving the altitude instead of the height at

which the average dry updraft strength drops below 225 fpm.

XCSoar User Manual

bl cloud : This parameter provides an additional means of evaluating the formation of clouds within the BL, and might be used either in conjunction with or instead of the other cloud prediction pa- rameters. It assumes a very simple relationship between cloud cover percentage and the maximum relative humidity within the BL.The cloud base altitude is not predicted, but is expected to be below the BL top altitude.

Sfc temp : The temperature at a height of 2 m above ground level. This can be compared to observed surface temperatures as an in- dication of model simulation accuracy; e.g. if observed surface temperatures are significantly below those forecast, then soaring conditions will be poorer than forecast.

wblmaxmin : Maximum grid-area-averaged extensive upward or downward mo- tion within the BL as created by horizontal wind convergence. Positive convergence is associated with local small-scale conver- gence lines. Negative convergence (divergence) produces sub- siding vertical motion, creating low-level inversions which limit thermalling heights.

blcwbase : This parameter estimates the altitude of the cumulus cloud base.

XCSoar User Manual

The colour schemes used in rendering the RASP contours are illustrated in the table below.

Cloud cover [%]

Height [m]

Temperature [°C]

Vertical speed [m/s]

Wind speed [m/s]

### 7.14 pc_met, Deutscher Wetterdienst

German weather service “Deutscher Wetterdienst” provides several useful meteorological images for XCSoar users. To use it, you need a (paid) account with their pc_met product.

Note that this feature requires and uses an internet connection. This may be expensive, depending on your mobile data plan.

To enable the feature, enter your pc_met credentials in XCSoar’s

XCSoar User Manual

Info (cid:46) Weather

system configuration. There are two username/password pairs: the first is for DWD’s web services (on www.flugwetter.de), and the other is the FTP password (on ftp.pcmet.de).

During preflight check and during the flight, you can check weather forecasts and live weather data in the Info menu. Below “Overlay”, you can choose layers for the map window. “pc_met” is a collection of live images which are usually displayed on the DWD web site www. flugwetter.de.

8 Airspace, Traffic and Team Flying

### 8.1 Airspace display

A database of Special Use Airspace (SUA) can be loaded into XCSoar and used for both display of the airspace regions as well as detecting when the glider enters and leaves the regions.

A list of airspace files can be set in the configuration settings. See Section 13.4.

It is the user’s responsibility to ensure that the SUA database (airspace file) is up-to-date.

Through a connected FLARM device, the glide computer can also display information relating to FLARM-equipped nearby traffic and obstacle threats.

A team code function allows teams of pilots to exchange their positions via radio in a short code, encoded and decoded by the computer.

Local special use airspace regions are drawn on the map as shaded areas with thick borders. The colour and pattern of the areas are specific to different airspace categories and may be configured by the user. Depending on the settings, the user may choose to display all airspaces, only airspaces below a certain altitude, only airspace within a particular height separation, or only airspace below the glider.

The patterns used to display airspace areas include opaque, transpar- ent (hollow) and several hatched and stippled patterns. The non- opaque patterns are partially transparent with respect to terrain and topography but are not transparent with respect to overlapping airspace. However, where overlapping airspace occurs, all borders are visible. That is, even though airspace patterns are not mutually transparent, all airspace borders are drawn on top of the airspace areas.

Both the display and warning of airspace classes can be individually enabled or disabled by the user as described in Section 8.3.

The default colouring of Class C, D, E and F airspace is consistent with ICAO charts.

Incursion events

Three types of events are detected by XCSoar in relation to SUA:

Predicted incursion : This event is detected when the glider is estimated to be on a track that will result in entering the airspace at a set time in the

XCSoar User Manual

future. The time is the airspace ‘warning time’ configuration setting.

The use of a long term average track in these calculations means that the system can still predict incursion even when drifting in the wind when circling.

Entering : This event occurs when the glider enters an airspace region.

Leaving : This event occurs when the glider leaves an airspace region.

In all cases, the boundary of the region is defined by maximum and minimum altitudes or flight levels, as specified in the airspace file.

Airspace warnings are still issued even if the incursion region is off- screen.

Where a barometric altitude source is available, it is used preferen- tially to GPS altitude in detecting airspace incursions. This makes the system conform to normal conventions of having airspace violations based on QNH-adjusted altitude.

### 8.2 Airspace warnings

The concept of airspace warnings in gradual levels is introduced:

None : Aircraft is outside and distant from airspace.

Near : Aircraft is predicted to penetrate the airspace and is close to

doing so.

Inside : Aircraft is inside airspace.

At all times XCSoar monitors the aircraft relative to all airspace and maintains warning levels for each. The airspace warnings are still filtered according to the airspace filter preferences; such that certain categories of airspace may be effectively disabled. The sequence of events when entering an airspace results typically in two warnings: when near (level 1), and when inside (level 2).

Whenever the warning level increases (above level 0) for any airspace, the airspace warning dialogue appears, accompanied by a system beep. When there are no more airspace regions at warning levels above 0, the dialogue disappears automatically.

Airspace warning dialogue

The airspace warning dialogue contains a list of up to 4 individual warnings. The list items status background is coloured red if the glider is inside, and yellow if near. If the warning is acknowledged, the text is greyed out.

Each list item occupies two rows, and includes the following details: <NAME and Class> <Time and distance if outside> <BASE>

<Position>

<TOP>

XCSoar User Manual

The values in the list are continuously updated. An example follows: Bern TMA Class D 35 sec horizontal dist 1300

FL100 1750m

near

This means that the aircraft is 1300 m horizontally separated from the Class D airspace ‘Bern TMA’, with a base of 1750 m and ceiling at FL100.

Another example: Bern CTRgld Class C

1350m SFC

inside

This means that the aircraft is inside the Class C airspace ‘Bern CTR- gld’, with base of terrain surface and ceiling at 1350 m.

If there are airspace warnings any time the airspace warning dialogue is shown you get the details to an airspace by touching it.

Airspace warning acknowledgement

When the warning dialogue is visible and an airspace warning is active, it is possible to close the warning dialogue without acknowledging the warning. Depending on the hardware used you may press ESC (on PC) or the Close button.

When one or more warnings are visible in the airspace warning dia- logue, a warning can be acknowledged by pressing one of the buttons along the bottom of the dialogue.

The meanings of the acknowledgement buttons are as follows:

ACK Warn : Acknowledge the current warning level. A new warning will

appear only if the warning level increases.

ACK Space : Acknowledge all current and future warning levels from this par- ticular airspace region while the aircraft is within 2.5 km hori- zontal separation and 500 m vertical separation.

ACK Day : Acknowledge all current and future warning levels from this par- ticular airspace region for the rest of the flight (specifically, until XCSoar is restarted).

Enable : Cancels an acknowledgement of the airspace, to reactivate all

warnings from this space.

Close : Closes the airspace warning dialogue, without acknowledging airspace. The dialogue will re-open automatically if the airspace warning level increases.

Note that not all acknowledgement buttons may be visible for all warning levels. In particular, if inside SUA, you do not have the option to Acknowledge the Warning (ACK Warn), since it is at this point no longer warning of an impending airspace incursion, but in fact stating that you are currently inside the airspace.

XCSoar User Manual

The general guidelines for using the dialogue are:

• Don’t acknowledge a warning if you intend to or must avoid the

airspace

• The warning system beep only occurs when the warning level

increases.

• The warning system is designed to allow circling near an airspace without over-stressing the pilot with extraneous warnings.

When an airspace region is acknowledged, the region is drawn on the screen without a pattern.

When the aircraft is predicted to enter an SUA region, or it actually enters an SUA region, a warning is raised, presented as an audio alert and a status message describing the type of airspace warning, and some SUA details (including class of airspace, base and ceiling altitude or flight level).

Acknowledged warnings will repeat after a certain time specified as the ‘Acknowledge time’ in the configuration settings.

Airspace warning acknowledgements apply to individual SUA regions. If, for example, a glider enters airspace A and the pilot acknowledges the warning, and shortly thereafter is predicted to enter airspace B, an airspace warning for SUA region B will be raised.

If you want acknowledged airspace warnings to not be repeated, set a very large value for the configuration setting ‘Acknowledge time’.

Airspace warnings are automatically cleared when both the current glider’s position as well as the estimated future track are clear of the airspace.

Simultaneous airspace warnings can occur if the aircraft (or its esti- mated future track) penetrates multiple airspace regions.

### 8.3 Airspace query and details

For touchscreen/mouse devices, when an airspace region is visible on the map area, it may be queried by touching the region on the map. The map item list will appear and give you an overview of the way- points, airspaces, etc. below your finger tip, or mouse pointer. SUAs are listed with similar details as provided when an actual warning is raised. The query returns all airspace regions when overlapping airspace is visible at the query location. Selecting the SUA on the list and pressing Details or the enter key displays all airspace details.

Airspace filter dialogue

The Airspace Filter dialogue allows warnings and display to be enabled or disabled for each class of airspace.

XCSoar User Manual

Airspace selection dialogue

This may be accessed several ways:

• From the main menu Info. 3 (cid:46) Airspace .

• Or at the system configuration page for airspaces, press the

Filter button.

To use the dialogue, move up or down the list and the enter key will cycle between the various warning and display options.

Lookup button brings up the airspace select dialogue. Pressing the This functions similarly to the waypoint lookup dialogue, and allows search based on name, distance, direction, and type (class).

Once an airspace item has been located, you have the chance to ac- knowledge it for the day. From the airspace management dialogue it is possible to re-enable it again.

### 8.4 Analysis dialogue

Info 1 (cid:46) Analysis

The analysis dialogue contains a page showing a cross-section of the airspace.

The display shows along the horizontal direction, the distance from the glider out to 50 km in the direction of the glider’s track; along the vertical direction is altitude. The altitude of the glider is indicated by a white arrow. This page is useful to help visualise complex layering of airspace.

The “Warnings” button opens the airspace warning dialogue if close to airspace.

XCSoar User Manual

### 8.5 FLARM traffic

FLARM map display

13.6

FLARM radar

13.20

If connected to a FLARM device, FLARM traffic is displayed on the map area. Each FLARM aircraft received is drawn as a dashed red disk.

Do not use XCSoar for collision avoidance, as FLARM audio devices are much more suitable in assisting the pilot to be aware of traffic.

Note that unless one is circling, the usual zoom level is such that FLARM traffic will not be easily distinguished. When one is circling, the zoom level might be appropriate, but continuous direction change and the typical latency of a PDA makes the map display a poor aid at helping to locate the traffic.

The FLARM targets on the map are drawn as red coloured arrow heads to indicate the direction the FLARM target is heading, as well as the collision risk. Note that these arrow heads are oriented according to the display orientation. For example, if the orientation is track- up, then the arrows show the relative track bearing of the target to the aircraft. If the orientation is north-up, then the arrows show the absolute track bearing of the target.

Display on the map FLARM of aircraft registration or pilot name is made possible via a look-up of the ICAO aircraft ID of FLARM traffic in a file. See Section 14.11 for details on this file format. Aircraft with the FLARM privacy flag set will not have any identification displayed.

To remedy this situation, when FLARM traffic is received, XCSoar shows a small radar-style view of the FLARM traffic from the per- spective of the aircraft. The FLARM traffic is displayed in identical style, except that the threatening traffic is emphasized with one or two red circles around the arrow head icon. The display corner used for the small radar view can be configured.

This FLARM display is oriented track-up and a small glider icon clearly shows that the display is oriented as such. The scale of the display is linear up to maximum distance of 2000 m. On the background there are two rings; the first is a 1000 m radius and the second is 2000 m. Traffic farther away than 2000 m is drawn at the 2000 m ring. When traffic is farther than 4000 m away, the small radar view disappears.

All the FLARM displays shows FLARM traffic in colours according to the threat level, or team and dialogue status. The traffic is coloured:

• No color for level 0, no threat.

• Yellow for level 1, warning.

XCSoar User Manual

• Red for level 2 and 3, alert.

• Green for the team mate.

• Blue is the selected target.

For every target above threat level 1 the rough relative height is shown. The supplied figure is the absolute height difference rounded by 100. A small triangle indicates that the target is higher or lower than you. The example radar shows a target approximately 100 m (for metric altitude) higher.

The FLARM radar-like display, when enabled, can be suppressed when visible by pressing the enter button. If the FLARM radar is suppressed, pressing the enter button again cancels the suppression and the radar is shown again. When new traffic appears in the radar, or if the FLARM issues a collision warning, the suppression is canceled.

FLARM Traffic dialogue

13.14

FLARM

Radar

Info 1 (cid:46)

Once FLARM has reported traffic and the small radar-style view of the FLARM traffic gets activated you can tap on the FLARM radar to enlarge the view to fullscreen size. The fullscreen FLARM display offers all available information about the FLARM traffic and depending on the setup it closes by itself, when all traffic has gone.

Only a few controls are on the dialogue, from top down:

North up :

If checked the radar screen is oriented North up, if not the ori- entation is Track up.

Up - Down

A. Zoom : Automatic zoom scales the radar screen so that the targets are If not checked, the screen must be zoomed perfectly visible. manually. The Up-Down gesture activates the automatic zoom.

Right - Left

Avg/Alt : The button toggles in-between average vario and altitude dis-

played next to the target.

Down - Right

Details : Through the button a separate dialogue with all details to the

XCSoar User Manual

selected target is accessed.

Up/Down

+/- : Manually change the zoom from 500 m to 10 km radar range.

The zoom gestures also apply here.

Left/Right

(cid:47)/(cid:46) : Select the previous or next target on the radar, gestures work in

the same manner.

The three screenshots are taken in a sequence and demonstrate a typical near pass of e.g. two FLARM equipped gliders. The extra information is colour-coded in the already mentioned way. In the four corners of the radar screen is additional info to the selected target displayed:

Top left :

If available the FLARM ID of the selected target.

Top right : Vario of the target, derived from the consecutive altitude mes-

sages.

Bottom left : The distance to the target.

Bottom right : The relative height of the target.

From the first to the second FLARM snapshot about 15 seconds elapsed. The selected blue target was climbing at 3.4 m/s and did not have a relative course recognised as a threat. Then in the mean- time the ‘DC’ has turned more to the left, became an alerting threat and is now displayed red. The FLARM radar switched the zoom from 1000 m to 500 m. In snapshot three the continuously climbing target becomes classified to threat level 1, gets coloured yellow and seems to no longer be a threat.

### 8.6 Team flying

Team code is a system to allow pilots flying within a team to commu- nicate their position to each other in a concise and accurate manner. The principle of the system is that each pilot uses their computer to determine a 5 digit code which describes their position relative to a common waypoint. The pilots call each other reporting these codes,

XCSoar User Manual

Info 2 (cid:46)

Team

Code

FLARM ID lookup

Info 2 (cid:46)

FLARM

Details

and entering the codes into the computer allows their mates to be located accurately by the computer.

To use the team code, all pilots in the team should select a waypoint to be used as the reference. This is all done on the team code dialogue. The reference waypoint is set via the button. Select a waypoint from the lookup dialogue and it will be the team reference.

Set WP

During flight, the pilot can read out his ‘Own code’ from the team code dialogue to his team mate, in order to report his position. When the pilot hears a code report from a team mate, he presses the Set Code button to open the text entry dialogue to allow entry of the mate’s code.

After entering the mate’s code, the relative distance and bearing to the mate is calculated and updated in the dialogue.

XCSoar also supports the encrypted team codes from the FlarmNet initiative. The Flarm Lock button allows you to access the FlarmNet database as well as XCSoar’s database for FLARM to find a team mate. A simple lookup for a competition ID delivers potentially the desired FLARM identity. Selecting the desired data base entry from the found items allows you to ‘lock’ your buddy from afar. See Section 14.11 for where to find the FlarmNet database etc. explained in detail.

Similar functionality provides the FLARM details dialogue. It also lets you search through the competition ID’s in the data base and shows the details on it.

Click your buddy

Even if XCSoar can ‘lock’ only one team mate by reference waypoint, it handles any number of ‘friends’ with a known FLARM ID. Chances are high your buddy is not registered in any database. But in any case

XCSoar User Manual

you get closer to your flying colleague, just pick the details from the FLARM radar screen, choose a colour and XCSoar will identify this FLARM response in the future as your buddy.
