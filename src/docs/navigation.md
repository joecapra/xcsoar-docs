---
id: navigation
title: "Chapter 4: Navigation"
sidebar_position: 4
---

4 Navigation

This chapter describes the moving map display as an aid to navigation, and also describes some of the task and glide related overlays on the map display.

### 4.1 Map display elements

The moving map shows:

1. Glider, wind indicator, thermal profile, final glide indicator

2. Terrain, relief and hight of the terrain

3. Topography, rivers, roads, towns

4. Waypoints, airports, landables

5. The active task, observation zones, turnpoints

6. The bearing (or route1) to the next waypoint, heading

7. Airspaces

8. Markers, thermals history, snail trail

1 The line to the next waypoint may be a route, as described in Section 4.14.

XCSoar User Manual

9. Glide range2

The map is drawn in a projected coordinate system (not latitude and longitude), and the scale can be changed (zooming in and out), as well as panned. All navigation functions take the curvature of the Earth into account.

### 4.2 Glider symbol, map orientation

The glider symbol shows the position of the glider on the map. The orientation of the glider indicates the estimated heading of the glider.

The map is oriented in one of three ways: North up, Track up, or Target up. Configuration settings can be used to specify a different map orientation when in circling mode. This is useful to prevent disorientation when looking at the map while circling. Target-up when circling makes it easy to determine which direction to exit the thermal.

When Track or Target-up is used in circling mode, the glider symbol is centred on the screen, even if the symbol position is configured differently. In cruise mode the Track and the Target-up orientation allows the glider symbol to be positioned (e.g.) 20% from the bottom of the screen, giving a good view of the map ahead of the glider. This position is adjustable in the configuration settings.

13.5

13.5

### 4.3 Zoom and map scale

To change the scale of the map, depending on the hardware you use:

1. Tap/click on a blank part of the map to highlight the map if it is not already selected. Then use mouse wheel, or the Pocket PC up/down key to either zoom in or out.

2. Android devices have the +/- rocker that let you change the zoom (it usually allows for adjusting the sound volume). It may be difficult to access during a flight, when the device in on a generic mount.

3. You can also gesture to change the zoom level. Gesture Up (see

left) zooms in, Down zooms out.

4. Or select the function from the menu.

Display 1 (cid:46) Zoom In

and Zoom Out

The map scale is displayed in the lower left corner of the moving map display. The indicated distance is measured from the left to the right border of the map display.

Compaq Aero Users. If you enable the Compaq Aero Game Keys (On the Q-menu) the centre two front buttons become the up/down keys.

2 The glide range is also referred to as the reach, as described in Section 4.12.

XCSoar User Manual

Circling Zoom

13.5

Auto Zoom

Display 1 (cid:46)

Zoom

Auto

There is a facility to have two zoom settings; one when the glider is in circling mode, and one in the cruise or final mode. This is the ‘Circling zoom’ option in the configuration settings. By default, the circling zoom is set to about 2.5 km - 5.0 km, depending on the display size. When the user zooms in or out, it affects the current mode’s zoom setting only, so when leaving the mode the previous mode’s zoom setting is used. If ‘Circling Zoom’ is not enabled, there is only a single zoom level. This leads to different zoom levels being preserved to be managed manually, independent of the following Auto Zoom settings.

Auto Zoom automatically zooms in when approaching a waypoint to keep the waypoint at a reasonable screen distance. When Auto Zoom is active, ‘AUTO’ appears next to the map scale.

To invoke Auto Zoom use the gesture or menu path depicted to the left. Switching back to manual zoom is simply done by using the same menu path or just zooming manually, no matter whether done via menu or gesture.

When a waypoint changes (automatically, via the task selector, or by manually switching waypoints), Auto Zoom adjusts the zoom level automatically so that the next waypoint is visible on the map.

During circling, if a thermal has been detected, then the map is centred about the thermal or part-way such that the glider is still visible.

### 4.4 Panning the map

Display 1 (cid:46) Pan On

A pan mode allows the user to explore areas beyond the glider. This is particularly useful when task planning.

1. Enable pan mode by button menu or by gesture. The gesture for this is moving your fingertip up, right, down, left, supposed to form a “P”.

2. The map can then be panned by dragging the screen or using

the cursor keys.

3. When done, pan mode has to be disabled manually, by pressing ‘Pan Off ’ from the special sub-menu of buttons in pan mode.

When pan is active, the letters ‘PAN’ appears next to the map scale. While panning the location of the focus stays in the middle of the display under the cross hairs.

Despite the focus under the cross-hairs the map still offers the ‘What’s here?’ feature just by touching any position on the map (presuming a touch-screen).

XCSoar User Manual

### 4.5 Waypoints

Landables

Waypoints are displayed with different symbols and different options for waypoint label content depending on the waypoint type; the major distinction being landable and non-landable waypoints.

13.7

Landable waypoint symbols are drawn as shown below. There are three icon sets available for landable waypoints.

d l e fi

e l b a d n a L

l

i

a n g r a M

e l b a h c a e R

d l e fi r i A

l

i

a n g r a M

e l b a h c a e R

Icon set

Purple Circle

B/W

Traffic lights

The marginal icons are drawn for those waypoints which are principally in the reach, but it is not possible to approach them directly. E.g. a mountain prohibits a direct approach.

13.7

Waypoints are optionally labelled according to one of several abbrevi- ation schemes and visibility.

On top of this, landable waypoints can be displayed in more detail. If ‘Detailed landables’ is switched on, you get additional information encoded in the appearance of its icon.

1. Landable fields get a square-shaped icon despite what is shown in the table. The square is drawn like a diamond standing on one corner. Airfields stay with the circle shape, so that they become easy to distinguish.

2. All icon sets, including the ‘Purple Circle’ icon set, get the run- way turned into their actual direction. The runway direction has to be available in the waypoint data. E.g. the SeeYou waypoint file format (.cup) does include this information.

Extra Data in Landables Labels

In XCSoar’s default configuration, estimated arrival height is shown in the labels next to symbols for reachable landable waypoints. This is one of XCSoar’s most powerful features. The displayed arrival height is the arrival height above the configured safety ’Arrival height’ (a user setting on the ’Glide Computer / Safety Factors’ configuration page).

13.10

XCSoar User Manual

13.7

13.4

The arrival height calculation takes several things into account, includ- ing glider performance (polar), MacCready setting (MC), and wind. Given all the user-configurable options that go into this calculation, unless you fully understand the glide computer’s concepts, it’s rec- ommended that you use XCSoar’s default configuration. Even then, don’t assume these calculations are perfect! The pilot should always interpret and understand the values shown and watch their trends over time.

The ’Arrival height’ setting on the ’Map Display / Waypoints’ con- figuration page controls the display of this arrival height and gives other options (e.g., none, arrival height that accounts for any needed detours around terrain, required glide ratio, and certain combinations of these options).

The displayed glide ratio to a waypoint is simply the glider’s distance from the waypoint divided by how high the glider is above the mini- mum desired arrival height, which is the waypoint elevation plus the the configured safety ’Arrival height’. Nothing else is taken into ac- count - no polar, no MacCready setting, no wind - just simple geom- etry.

In the default configuration, XCSoar only shows this extra data (ar- rival height, in the default configuration) for reachable waypoints; but if a glide ratio option is chosen, glide ratio will be shown even for unreachable waypoints. Also, if a waypoint file is configured as the ’Watched waypoints’ file (selected on the ’Site Files / Site Files’ con- figuration page), even arrival height will be displayed for unreachable waypoints (if an ’Arrival height’ option including arrival height is se- lected).

Which is better, arrival height or glide ratio? This is a common topic of discussion among glider pilots. Glide ratio is a more trustworthy value, since it’s calculated based on simpler, more trustworthy values; but arrival height more precisely tells you what you really want to know: how high you’ll be when you get there. Also, you don’t have to watch arrival height as much to look for a trend. With glide ratio, you often need to watch for the trend to see whether you’ll make it. Since wind causes your achieved glide ratio relative to the ground to vary with wind speed, wind direction, and flight direction; it’s tough to know at any given time what glide ratio relative to the ground you can expect to achieve. Maybe you’re headed to a landing place where you’d really like to arrive higher than your configured safety ’Arrival height’. If all you see is glide ratio, the most you can know is simply whether you’ll arrive above or below your configured safety ’Arrival In another scenario, maybe all you height’ - but not by how much. see is arrival height and it’s positive but decreasing slowly as you fly toward the landing place. It would be difficult to figure out whether it’s trending downward too quickly for a safe arrival. With glide ratio, If glide though, you could much more easily answer this question. ratio is holding steady or trending down (i.e., to a steeper glide), it

XCSoar User Manual

Non-Landables

looks like you’ll make it. More could be said on this subject, but since there are cases when glide ratio is better and cases when arrival height is better, maybe showing both is the best option... and is an option XCSoar offers!

As far as your waypoint file contains information on the nature of the non-landable waypoints, the map will then display specific icons accordingly. Figure 4.1 contains a collection of the currently supported map icons.

top

waypoint Mountain Simple

Obstacle

Pass

building Tunnel

or

plant Power

Tower

station Weather Bridge

### 4.6 Active task

Figure 4.1: non-landables

The active task course is drawn on the map as a blue (dashed) line.

Assigned area tasks also show the turn point sectors or areas as a yellow shaded region. Circles are always drawn around start and finish points, lines are only drawn if the start/finish points are of line type. Task observation sectors are drawn as circle segments.

At all times a thick black line is drawn from the glider to the next waypoint in the task. This line may be the direct path to the way- point, or may be a route path clearing terrain and airspace obstacles, described in further detail in Section 4.14.

Start/finish

Sector

Cylinder

XCSoar User Manual

### 4.7 Terrain and Topography

The following topographical features are drawn on the map:

• Major roads, shown as red lines

• Rivers, shown as blue lines

• Large water bodies (lakes), shown as blue areas

• Large cities, shown as yellow areas

• Small population areas, shown as yellow diamonds

Cities and small population areas are labeled in italics.

Terrain is coloured according to elevation, and optionally shaded by Invalid terrain, or terrain below sea level is sun, or wind direction. coloured blue.

Terrain is shaded to improve visibility. The default shading is set up so that the virtual lighting position is the wind bearing, thus brighter areas are on the upwind side of hills and dark areas in the lee of the hill. Support for a sun ephemeris is also implemented. If the slope shading is set to ‘Sun’, the brightness of a slope follows the day time in a very natural way. The amount of shading and overall terrain brightness is configurable.

Both terrain and topography display can be switched on or off from the menu.

Topography

Terrain

Display 2 (cid:46)

Terrain

On/Off

Display 2 (cid:46)

Topo.

On/Off

13.8

If the terrain data is not available (or terrain display is turned off), the background colour of the map window is white. All terrain below mean sea level is coloured blue. If you are flying outside the terrain region, the background colour will be white.

Map labels

Display 2 (cid:46)

Labels

None

The screen can be de-cluttered, turning off the display of all waypoint labels by toggling the ‘Labels’ menu.

Other options for display decluttering include:

XCSoar User Manual

Labels

Task &

Airfields

Labels

All

Labels

Task &

Landables

Labels

Task

Shows labels for the waypoints in the active task and any airfields (based on the waypoint attributes in the waypoints file). Other waypoints are shown but not labeled.

Shows labels for all waypoints.

Shows labels for the waypoints in the active task and any landable fields (based on the waypoint attributes in the waypoints file). Other waypoints are shown but not labeled.

Shows labels only for waypoints in the active task

13.7

Note that in all cases, the label format is configurable in the ‘Waypoint Display’ configuration menu.

### 4.8 Trail

An optional ‘snail trail’ is drawn on the map showing the glider’s path history. The colour and thickness of the trail depends on the altitude or on the variometer value.

13.6

Trail

Full

Display 2 (cid:46)

If Vega or an intelligent variometer is connected with Netto output, the Netto vario value is used; hence the colours and thickness of the trail indicates the air-mass vertical movement rather than the glider’s vertical movement.

The snail trail display can be toggled between Off, a Short trail (about ten minutes), a Long trail (about one hour) or a Full trail which displays the entire flight. This can be performed permanently through the configuration settings or temporarily by the menu.

Note that for all of these modes, the snail trail is short in circling mode in order to reduce screen clutter.

In order to assist centring thermals in the presence of wind, the snail trail can be artificially drifted with the wind as it is displayed (this is drift compensation). In this way, the snail trail is referenced to the prevailing wind rather than referenced to the ground. Since thermals drift with the wind also, the drifted trails give a better indication of where the glider has been relative to the thermals.

XCSoar User Manual

An example of this is illustrated below. Note that when trail drift compensation is active (right picture), the glider appears to be circling in a column rather than an elongated spiral (left picture).

13.6

Wind

Enabling trail drift compensation is performed through the configura- tion settings. The compensation is only performed whilst in circling mode; the display of the trail in cruise mode is unaffected. This can also be performed from the wind settings dialogue.

Config 1 (cid:46)

The trail drift display is useful also to show more clearly when thermals are cranked due to wind shear.

13.6

The trail width can optionally be scaled according to the variometer display.

### 4.9 Markers

Nav 2 (cid:46)

Mark

Drop

### 4.10 Pilot Event

Nav 2 (cid:46)

Pilot

Event

13.17

Markers are shown as small flags (a) on the map. The markers can be dropped manually, by pressing a button, or automatically. An example use of automatic markers is to drop markers when entering circling mode, as a simple way of showing all thermals encountered.

Markers are not preserved after XCSoar is exited, however the location of all marks are appended to the file xcsoar-marks.txt.

A Pilot Event (PEV) system allows pilots to mark particular times during a flight, such when inside a Turn Point Observation Zone (TP OZ). Also, when configured, it allows to initiate a special Pilot Event task start protocol3.

When pressed, XCSoar will internally track the window open and close times, according to configuration defined in Task Rules (See 5.6): start window will open after PEV start wait time minutes and will be open for PEV start window minutes. The start open/close countdown will be displayed in the Start open and Start reach infoboxes. Make sure to have one/both visible to effectively calculate your start.

3 PEV start procedure may be used in competitions to reduce mass starts, gaggles and following.

XCSoar User Manual

Also, Pilot Event will be announced to connected devices, allowing loggers to register it without pilot pressing the physical button on the logger device itself. This might be useful when logger is located outside of pilot reach (e.g. behind the panel). It is recommended to check on your device’s manual whether it supports external PEV declaration -some older loggers may not-.

In order to start a task when Pilot Event Start is used, press the Pilot Event button, wait for PEV start wait time and then cross the start line within PEV start window minutes.

It may be useful to have Start open and/or Start reach InfoBoxes visible to effectively use the PEV Start procedure.

Note that the start window created by pressing the Pilot Event is “soft”, as it is only informative to the pilot via the infoboxes men- tioned above. XCSoar will still compute a valid start if one is per- formed outside of the PEV window -just like it would be scored in a competition-. In contrast, the task settings Start open/close time in 5.6 define a “hard” window, outside of which a start will not be computed.

While climbing in thermals, a marker is automatically generated show- ing the thermal location on screen. The positions of the last 20 ther- mals are stored until the end of the flight. This thermal history is accessible through the map element functions in the same way as markers or waypoints.

### 4.11 Thermals

### 4.12 Glide range line

A reachable glide ‘footprint’ is displayed on the map display as a black and white dashed line, indicating where the glider would descend through the terrain clearance height. The reach shows clearance tracks extending in all directions, optionally including paths around terrain obstructions. This feature is useful in assessing range with respect to topography when searching low for lift, and when flying in mountain- ous areas.

13.13

Reach calculations may be configured to two levels of detail:

Straight line :

If turning reach is disabled, then the reach shows the furthest distance the glider can fly in final glide in all directions without turning. This reach appears as a closed ring around the glider.

XCSoar User Manual

Turning :

If turning reach is enabled, then the reach shows the greatest area the glider can reach in all directions, even allowing turns around obstructions.4 The reach area appears as a closed ring around the glider but may also include holes indicating mountain peaks that the glider cannot reach without further climb.

13.13

The display can be configured to additionally blur the unreachable area outside the glide range. The final glide path is checked for whether the glider clears terrain along the path by the terrain clearance height (see Section 6.8). If clearance is not attained, a red cross appears on the map at the point where the violation occurs. If a target is defined If no the calculation is done along the straight path to the target. target is defined the calculation is done along the current heading.

If reach is enabled, then the reachability of landable waypoints is used by the abort task mode, alternate landable option lists and display of landable waypoints on the map.

Note that task calculations are otherwise unaffected by reach calcula- tions — for example, altitudes required as shown in the final glide bar or task data as displayed in InfoBoxes do not take reach into account.

4 The maximum number of turns is set to three, and no turns may be greater than 90 degrees.

XCSoar User Manual

Furthermore, the reach calculations are used for footprint, landable waypoint arrival heights, abort mode and the alternates dialogue. The glider performance and MacCready setting used in these calculations are configurable:

13.13

Task : The MC value is that used in the task.

Safety MC : A configurable, typically low MC value is set by the user to set performance near, but slightly degraded, to best glide perfor- mance. The amount of safety in the reach calculation is then the gap between best glide performance and the glide perfor- mance following the safety MC speed to fly.

### 4.13 Status tabs ‘Flight’ and ‘Time’

The status dialogue is a multi-tabular dialogue giving overview in- formation on the flight, system, task, rules and times. These are information, and hence cannot be modified by the user. It is accessed via the gesture “S”, or with the button menu.

Info 2 (cid:46) Status

Left - Down - Right -

Down - Left

Flight

Times

### 4.14 Route

Select the tabular page ‘Flight’. The flight status dialogue shows the status of the aircraft’s locality. It shows the location of the aircraft, the maximum height gain, and nearest waypoint it’s bearing and distance.

You may find this function useful when you need to report your location to others.

Select the tabular page ‘Times’. It shows the local time, UTC time and date, flight duration, takeoff and landing time, and the local sunrise and sunset times.

Note that the values in the Status dialogue are static once the par- ticular dialogue page is displayed. That is, position, times, etc. do not update while the page is displayed. To see the updated values, it is necessary to select a different tabular, then return to the previous dialogue to see the new values.

XCSoar can plan paths around terrain and airspace obstacles in three dimensions from the aircraft to the destination. Such a path is known as a route. The height of the destination is the arrival height for final waypoints, or may be higher for intermediate waypoints, as dictated by the task system as required to complete the task. Route planning functions in normal ordered task mode, abort mode and goto mode.

XCSoar User Manual

13.13

13.10

13.13

Routes take into account the glider polar performance and are calcu- lated to be optimal in the sense of minimum time. By default, route calculation is disabled, and can be enabled for terrain only or terrain and airspace avoidance.

Terrain is avoided vertically by the terrain safety height,with no addi- tional lateral clearance imposed. Valid routes may result in the aircraft arriving at the destination higher than the minimum height — such as can occur when the destination is just beyond a steep mountain.

Airspace is avoided horizontally by a buffer of approximately 250 m, with no additional vertical clearance imposed. Valid routes may fly below or above airspace.

If MacCready is positive, then climbs are optionally allowed in the computed routes. The top of the climb may be limited to 500 m above the higher of the start and destination ceiling, or increased to the ceiling defined by the thermal ceiling. Climbs above the higher of the start and destination altitude are penalised by a slower climb rate than the actual MacCready value.

Some approximations and limitations of the route planning system are as follows:

• Where climbs are necessary (and permitted) to reach the des- tination, the climbs are assumed to occur at the start of the route.

• Climb-cruise segments are assumed to occur at constant al- titude, equivalent to many small climbs distributed along the path.

• Individual turns between path segments greater than 90 degrees

are not permitted.

• Failures of the solver result in the route reverting to direct flight

from the aircraft location to the destination.
