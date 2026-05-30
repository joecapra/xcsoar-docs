---
id: infobox-reference
title: "Chapter 12: InfoBox Reference"
sidebar_position: 12
format: md
---

12 InfoBox Reference

InfoBox data types are grouped into logical categories.

All InfoBoxes display their data in user-specified units. Whenever the content is invalid, the displayed value will be ‘− − −’ and the content is greyed out. This happens, for example, when no terrain elevation is found for the ‘Terrain Elevation’ InfoBox, or in the same way for a derived InfoBox like ‘Height AGL’.

Some of the InfoBox contents are modifiable complex values like ‘MC setting’, or ‘Wind’. Most of those values are now accessible through an InfoBox dialogue. It is a short cut to quickly change the most often accessed items. An InfoBox dialogue is opened by long press to the InfoBox (Touchscreen devices), or ‘Select’ and ‘Enter’ (PC).

In the following description of the InfoBox types, the first title is as it appears in the InfoBox configuration dialogue box, the second title is the label used in the InfoBox title.

### 12.1 Altitude

Altitude GPS

Alt GPS

Barometric altitude

Alt Baro

Altitude (Auto) Alt <auto>

Height AGL

H AGL

Terrain elevation

Terr Elev

Height above take-off

H T/O

Altitude above mean sea level reported by the GPS. (Touch- screen/PC only) In simulation mode this value is adjustable with the up/down arrow keys. The right/left arrow keys also cause the glider to turn.1

Barometric altitude obtained from a device equipped with pressure sensor.1

Barometric altitude obtained from a device equipped with a pres- sure sensor or the GPS altitude if the barometric altitude is not available.

Navigation altitude minus the terrain elevation obtained from the terrain file. The value is coloured red when the glider is below the terrain safety clearance height.1

Elevation of the terrain above mean sea level obtained from the terrain file at the current GPS location.

Height based on an automatic take-off reference elevation (like a QFE reference).1

XCSoar User Manual

12.

INFOBOX REFERENCE

Flight level

Flight Level

Barogram

Barogram

Pressure Altitude given as Flight Level. If barometric altitude is not available, FL is calculated from GPS altitude, given that the In case the FL is calculated from the GPS correct QNH is set. altitude, the FL label is coloured red.1

Trace of altitude during flight.

### 12.2 Aircraft state

Speed ground

V GND

Track

Track

Airspeed IAS

V IAS

G load

G

Bearing Difference

Brng. D

Airspeed TAS

V TAS

Attitude indicator

Horizon

Ground speed measured by the GPS. If this InfoBox is active in simulation mode, pressing the up and down arrows adjusts the speed, left and right turns the glider.

Magnetic track reported by the GPS. (Touch-screen/PC only) If this InfoBox is active in simulation mode, pressing the up and down arrows adjusts the track.

Indicated Airspeed reported by a supported external vario.

intelligent

Magnitude of G loading reported by a supported external intelligent vario. This value is negative for pitch-down manoeuvres.

Difference between the glider’s track bearing, to the bearing of the next waypoint, or for AAT tasks, to the bearing to the target within the AAT sector. GPS navigation is based on the track bearing across the ground, and this track bearing may differ from the glider’s heading when there is wind present. Chevrons point to the direction the glider needs to alter course to correct the bearing difference, that is, so that the glider’s course made good is pointing directly at the next waypoint. This bearing takes into account the curvature of the Earth.

True Airspeed reported by a supported external intelligent vario.

Attitude indicator (artificial horizon) display calculated from flight- path, supplemented with acceleration and variometer data if avail- able.

1 In simulator mode an additional dialogue is available to change the value of the InfoBox.

XCSoar User Manual

### 12.3 Glide ratio

GR instantaneous

GR Inst

GR cruise

GR Cruise

Final GR

Fin GR

Next GR

WP GR

L/D vario

L/D Vario

GR average

GR Avg

12.

INFOBOX REFERENCE

Instantaneous glide ratio over ground, given by the ground speed divided by the vertical speed (GPS speed) over the last 20 seconds. Negative values indicate climbing cruise. If the vertical speed is close to zero, the displayed value is ‘- - -’.

Distance from the top of the last thermal, divided by the altitude lost since the top of the last thermal. Negative values indicate climbing cruise (height gain since leaving the last thermal). If the vertical speed is close to zero, the displayed value is ‘- - -’.

Required glide ratio over ground to finish the task, given by the distance to go divided by the height required to arrive at the safety arrival height. This is no adjusted total energy possible.

Required glide ratio over ground to reach the next waypoint, given by the distance to next waypoint divided by the height required to arrive at the safety arrival height. Negative values indicate a climb is necessary to reach the waypoint. If the height required is close to zero, the displayed value is ‘- - -’.

Instantaneous lift/drag ratio, given by the indicated airspeed di- vided by the total energy vertical speed, when connected to an intelligent variometer. Negative values indicate climbing cruise. If the total energy vario speed is close to zero, the displayed value is ‘- - -’.

Distance made in the configured period of time, divided by the altitude lost since then. Negative values are shown as ‘^^^’ and indicate climbing cruise (height gain). Over 200 of GR the value is shown as ‘+++’. You can configure the period of averaging. Suggested values are 60, 90 or 120. Lower values will be closer to GR inst., and higher values will be closer to GR cruise. Notice that the distance is not the straight line between your old and current position, it’s exactly the distance you have made even in a zigzag glide. This value is not calculated while circling.

### 12.4 Variometer

Last Thermal Average

TL Avg

Last thermal gain

TL Gain

Total altitude gain/loss in the last thermal divided by the time spent circling.

Total altitude gain/loss in the last thermal.

XCSoar User Manual

12.

INFOBOX REFERENCE

Last thermal time

TL Time

Thermal climb, last 30 s

TC 30s

Thermal average

TC Avg

Thermal gain

TC Gain

Vario

Vario

Netto vario

Netto

Vario trace

Vario Trace

Netto vario trace

Netto Trace

Thermal climb trace

TC Trace

Thermal average over all

T Avg

Climb band

Climb Band

Thermal assistant

Thermal

### 12.5 Atmosphere

Wind arrow

Wind

Time spent circling in the last thermal.

30 second rolling average climb rate based of the reported GPS altitude, or vario if available.

Altitude gained/lost in the current thermal, divided by time spent thermalling.

Altitude gained/lost in the current thermal.

Instantaneous vertical speed, as reported by the GPS, or the intel- ligent vario total energy vario value if connected to one.

Instantaneous vertical speed of air-mass, equal to vario value less the glider’s estimated sink rate. Best used if airspeed, accelerom- eters and vario are connected, otherwise calculations are based on GPS measurements and wind estimates.

Trace of vertical speed, as reported by the GPS, or the intelligent vario total energy vario value if connected to one.

Trace of vertical speed of air-mass, equal to vario value less the glider’s estimated sink rate.

Trace of average climb rate each turn in circling, based of the reported GPS altitude, or vario if available.

Time-average climb rate in all thermals.

Graph of average circling climb rate (horizontal axis) as a function of altitude (vertical axis).

Circular thermal assistant that shows the lift distribution over each part of the circle.

Wind vector estimated by XCSoar. Manual adjustment is possible with the connected InfoBox dialogue. Pressing the up/down cursor keys to cycle through settings, adjust the values with left/right cursor keys.

XCSoar User Manual

12.

INFOBOX REFERENCE

Wind bearing

Wind

Wind speed

Wind

Wind, head component

Head Wind

Wind, head component (simplified)

Head Wind *

Outside air temperature

OAT

Relative humidity

Rel Hum

Forecast temperature

Max Temp

### 12.6 MacCready

MacCready Setting MC <mode>

Speed MacCready

V MC

Percentage climb

% Climb

Wind bearing incl. wind speed, estimated by XCSoar. Adjustable in the same manner as Wind arrow.

Wind speed incl. wind direction, estimated by XCSoar. Adjustable in the same manner as Wind arrow.

Current head wind component. Head wind is calculated from TAS and GPS ground speed if airspeed is available from external device. Otherwise the estimated wind is used for the calculation.

Current head wind component. The simplified head wind is calcu- lated by subtracting GPS ground speed from the TAS if airspeed is available from external device.

Outside air temperature measured by a probe if supported by a connected intelligent variometer.

Relative humidity of the air in percent as measured by a probe if supported by a connected intelligent variometer.

Forecast temperature of the ground at the home airfield, used in estimating convection height and cloud base in conjunction with outside air temperature and relative humidity probe. (Touch- screen/PC only) Pressing the up/down cursor keys adjusts this forecast temperature.

Current MacCready setting, current MacCready mode (manual or auto), and recommended speed-to-fly. (Touch-screen/PC only) Also used to adjust the MacCready setting if the InfoBox is active, by using the up/down cursor keys. Pressing the enter cursor key toggles ‘Auto MacCready’ mode. An InfoBox dialogue is available

MacCready speed-to-fly for optimal flight to the next waypoint. In cruise flight mode, this speed-to-fly is calculated for maintaining altitude. In final glide mode, this speed-to-fly is calculated for descent.

Percentage of time spent in climb mode. These statistics are reset upon starting the task.

XCSoar User Manual

12.

INFOBOX REFERENCE

Speed dolphin

V opt.

Thermal next leg equivalent

T Next Leg

Task cruise efficiency

Cruise Eff

### 12.7 Navigation

Next Bearing

Bearing

Next radial

Radial

Next distance

WP Dist

Next altitude difference

WP AltD

Next MC0 altitude difference

WP MC0 AltD

Next altitude arrival

WP AltA

Next altitude required

WP AltR

Final altitude difference

Fin AltD

Final altitude required

Fin AltR

Instantaneous MacCready speed-to-fly, making use of netto vario calculations to determine dolphin cruise speed on the glider’s cur- rent bearing. In cruise flight mode, this speed-to-fly is calculated for maintaining altitude. In final glide mode, this speed-to-fly is calculated for descent. In climb mode, this switches to the speed for minimum sink at the current load factor (if an accelerometer is connected). When ‘Block’ mode speed to fly is selected, this InfoBox displays the MacCready speed.

Thermal rate of climb on next leg which is equivalent to a thermal equal to the MacCready setting on current leg.

Efficiency of cruise. 100 indicates perfect MacCready performance. This value estimates your cruise efficiency according to the current flight history with the set MC value. Calculation begins after task is started.

True bearing of the next waypoint. For AAT tasks, this is the true bearing to the target within the AAT sector.

True bearing from the next waypoint to your position.

Distance to the currently selected waypoint. For AAT tasks, this is the distance to the target within the AAT sector.

Arrival altitude at the next waypoint relative to the safety arrival height. For AAT tasks, the target within the AAT sector is used.

Arrival altitude at the next waypoint with MC 0 setting relative to the safety arrival height. For AAT tasks, the target within the AAT sector is used.

Absolute arrival altitude at the next waypoint in final glide. For AAT tasks, the target within the AAT sector is used.

Altitude required to reach the next turn point. For AAT tasks, the target within the AAT sector is used.

Arrival altitude at the final task turn point relative to the safety arrival height.

Additional altitude required to finish the task.

XCSoar User Manual

12.

INFOBOX REFERENCE

Final distance

Final Dist

Distance home

Home Dist

Distance to finish around remaining turn points.

Distance to the home waypoint.

Home altitude difference

Home AltD

Arrival altitude at the home waypoint relative to the safety arrival height.

### 12.8 Competition and assigned area tasks

Speed task average

V Task Avg

Speed task instantaneous

V Task Inst

Speed task achieved

V Task Ach

Speed task estimated

V Task Est

AAT time

AAT Time

AAT delta time

AAT dT

AAT max. distance

AAT Dmax

AAT min. distance

AA Dmin

AAT speed max. distance

AAT Vmax

AAT speed min. distance

AAT Vmin

Average cross-country speed while on current task, not compen- sated for altitude.

Instantaneous cross-country speed while on current task, compen- sated for altitude. Equivalent to instantaneous Pirker cross-country speed.

Achieved cross-country speed while on current task, compensated for altitude. Equivalent to Pirker cross-country speed remaining.

Estimated average cross-country speed for current task as of task completion, assuming performance of ideal MacCready cruise/climb cycle.

‘Assigned Area Task’ time remaining. Goes red when time remain- ing has expired.

Difference between estimated task time and AAT minimum time. Coloured red if negative (expected arrival too early), or blue if in sector and can turn now with estimated arrival time greater than AAT time plus 5 minutes.

‘Assigned Area Task’ maximum distance possible for remainder of task.

‘Assigned Area Task’ minimum distance possible for remainder of task.

‘Assigned Area Task’ average speed achievable if flying maximum possible distance remaining in minimum AAT time.

‘Assigned Area Task’ average speed achievable if flying minimum possible distance remaining in minimum AAT time.

XCSoar User Manual

12.

INFOBOX REFERENCE

AAT distance around target

AAT Dtgt

AAT speed around target

AAT Vtgt

‘Assigned Area Task’ distance around target points for remainder of task.

‘Assigned Area Task’ average speed achievable around target points remaining in minimum AAT time.

Contest distance

Cont Dist

Task progress

Progress

Start open/close countdown

Start open

Start open/close countdown at reaching

Start reach

### 12.9 Waypoint

Next waypoint

Next WP

Flight Duration

Flt Duration

Time local

Time loc

Time UTC

Time UTC

Task time to go

Fin ETE

Instantaneous evaluation of the flown distance according to the configured contest rule set.

Clock-like display of distance remaining along task, showing achieved task points.

If the Shows the time left until the start point opens or closes. PEV Start Procedure (4.10) is in use, time relative to the PEV window is displayed. Else, the task defined Start open/close time (5.6) are used.

Shows the time left until the start point opens or closes, compared to the calculated time to reach it. If the PEV Start Procedure (4.10) is in use, time relative to the PEV window is displayed. Else, the task defined Start open/close time (5.6) are used.

Name of the currently selected turn point. When this InfoBox is active, using the up/down cursor keys selects the next/previous waypoint in the task. (Touch-screen/PC only) Pressing the enter cursor key brings up the airfields or waypoint details.

Time elapsed since take-off was detected.

GPS time expressed in local time zone.

GPS time expressed in UTC.

Estimated time required to complete task, assuming performance of ideal MacCready cruise/climb cycle.

Task time to go (ground speed)

Fin ETE VMG

Next time to go

WP ETE

Estimated time required to complete task, assuming current ground speed is maintained.

Estimated time required to reach next waypoint, assuming perfor- mance of ideal MacCready cruise/climb cycle.

XCSoar User Manual

12.

INFOBOX REFERENCE

Next time to go (ground speed)

WP ETE VMG

Task arrival time

Fin ETA

Next arrival time

WP ETA

Task req. total height trend

RH Trend

Time under max. start height

Start Height

### 12.10 Team code

Team code

Team Code

Team bearing

Team Brng

Team bearing difference

Team BrngD

Team range

Team Dist

### 12.11 Device status

Battery voltage/percent

Battery

CPU load

CPU

Free RAM

Free RAM

### 12.12 Alternates

Alternate 1

Altn 1

Estimated time required to reach next waypoint, assuming current ground speed is maintained.

Estimated arrival local time at task completion, assuming perfor- mance of ideal MacCready cruise/climb cycle.

Estimated arrival local time at next waypoint, assuming perfor- mance of ideal MacCready cruise/climb cycle.

Trend (or neg. of the variation) of the total required height to complete the task.

Contiguous period the ship has been below the task start max. height.

Current Team code for this aircraft. Use this to report to other team members. The last team aircraft code entered is displayed underneath.

Bearing to the team aircraft location at the last team code report.

Relative bearing to the team aircraft location at the last reported team code.

Range to the team aircraft location at the last reported team code.

Percentage of device battery remaining (where applicable) and sta- tus/voltage of external power supply.

CPU load consumed by XCSoar averaged over 5 seconds.

Free RAM as reported by the operating system.

Name and bearing to the best alternate landing location.

XCSoar User Manual

12.

INFOBOX REFERENCE

Alternate 2

Altn 2

Alternate 1 GR

Altn 1 GR

Alternate 2 GR

Altn 2 GR

Alternate 1 altitude difference

Altn 1 AltD

Alternate 2 altitude difference

Altn 2 AltD

### 12.13 Obstacles

Nearest airspace horizontal

Near AS H

Nearest airspace vertical

Near AS V

Terrain collision

Terr Coll

### 12.14 Radio

Active radio frequency

Act Freq

Standby radio frequency

Stby Freq

Name and bearing to the second-best alternate landing location.

Geometric gradient to the arrival height above the best alternate landing location. This is not adjusted for total energy.

Geometric gradient to the arrival height above the second-best alternate landing location. This is not adjusted for total energy.

Arrival altitude at the best alternate landing location relative to the safety arrival height.

Arrival altitude at the second-best alternate landing location rela- tive to the safety arrival height.

Horizontal distance to the nearest airspace.

Vertical distance to the nearest airspace. A positive value means the airspace is above you, and negative means the airspace is below you.

Distance to the next terrain collision along the current task leg. At this location, the altitude will be below the configured terrain clearance altitude.

Currently active radio frequency.

Currently standby radio frequency.
