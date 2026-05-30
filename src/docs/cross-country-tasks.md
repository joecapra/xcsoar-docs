---
id: cross-country-tasks
title: "Chapter 5: Cross Country Tasks"
sidebar_position: 5
---

5 Cross Country Tasks

XCSoar provides a full task management system, in which tasks can be edited prior to flight and, when undertaking casual cross-country flying, modified during flight. Waypoints are advanced automatically or may be cycled through manually. Many of XCSoar’s computations relate to either turnpoints or the finish waypoint. Unless a “true” task is defined, XCSoar will provide a “go home” function, with many of the task related functions referring to the location of takeoff. This chapter also describes the use of IGC loggers with XCSoar.

There are three task modes available:

Ordered task : This is the natural cross-country task type, in which the task consists of a start point, zero or more waypoints, and a finish point. The task points are to be flown in order.

Goto task : Flight to a single destination.

Abort task : Provides options to fly to the nearest landing points.

Note that in goto and abort modes, the ordered task is retained and may be resumed later, preserving any statistics about achievement in the task.

Automatic goto

### 5.1 Goto tasks

If no ordered task is defined, then on takeoff, a goto task is auto- matically established with the takeoff point as the destination, or the nearest airfield if it was close to the takeoff point.

Whether or not a task is defined, the takeoff point is always generated and appears in the waypoint list for later reference or use.

After having defined an ordered task for the very first time, the au- tomatic “goto takeoff” function is skipped. To resume a simple task, use goto.

Goto tasks may be established by selecting a waypoint from the map, the waypoint list, or any other mechanism e.g. the alternates dialogue, and select GoTo . In goto task mode, selecting Nav 2 (cid:46) Task Resume resumes the ordered task (if any).

XCSoar User Manual

### 5.2 Editing tasks

You can edit tasks in several ways. Some methods are more useful for editing prior to flight, and others allow tasks to be modified whilst in flight for casual cross-country touring. Tasks can be saved to files and reloaded later, and can be transferred between any XCSoar platform (Android, Windows, Linux…).

It is also possible to save a ‘default’ task and have this task loaded automatically upon start-up of XCSoar. One application of this is to set up a default task with one waypoint being the home — this means that XCSoar is then programmed for final glide back to home, which is useful for casual cross-country touring.

The main ways of setting tasks are the following:

• Using the task editor dialogue

• Selecting waypoints from the map and adding them to the task

from the airfields/ waypoint details dialogue

• Loading the task from a file

Loading a task from file may be useful in competition or casual cross- country flying in groups, as one person can distribute the task file to others, thereby saving effort on editing the task severalfold. If no task is present at startup, a task is created automatically, containing one waypoint takeoff as “goto home”.

XCSoar saves the current task when shutting down and loads it at startup, thereby allowing the task to be entered early in the day, then the device running XCSoar can be turned off until flight time.

Task waypoints are preserved even if the waypoint file is changed. This means, if you save a task, then change the waypoint file, then load the task again, new waypoints are generated for any waypoints that are missing in the new waypoint file.

### 5.3 Waypoint Information

The waypoint info dialogue describes a waypoint in detail and has navigation functions such as GoTo, insert, append to the task, or set the waypoint as the new home. This may be accessed in several ways:

or menu Nav 1/2 (cid:46) Task , highlight a waypoint, then tap the high- lighted waypoint again to display the task point dialogue, then push Details .

or menu Nav 1/2 (cid:46) Alternates nearest to the aircraft.

or menu Nav 1/2 (cid:46) Waypoint List to show its details.

to show the details of the landables

, highlight and select a waypoint

or menu Display 1/2 (cid:46) Pan On

to put the map into pan mode, pan

XCSoar User Manual

Waypoint details

to the desired waypoint, touch its name or the waypoint symbol.

Info 1/3 (cid:46) What’s here? your index finger on the map.

to show the item list under the cross-hair, or

The airfields or waypoint details dialogue contains two major pages (accessed via the > and < buttons). Depending on the availability of further details of the waypoint they will by shown on extra pages.

This page contains text giving the name of the waypoint, the way- point’s GPS coordinates, elevation, radio frequency and runway infor- mation (if this information is in the waypoint file), local daylight time, bearing and distance to the waypoint, and the altitude differences re- quired to reach the waypoint as described below. In addition, there is a button GoTo to directly initiate navigating to this waypoint. The button cancels the current task.

As mentioned above, the Waypoint info dialogue also shows three forms of altitude difference (additional altitude required to reach the waypoint at the safety height) for the corresponding waypoint:

Alt diff MC 0 : Altitude difference at MC setting of 0

Alt diff MC safety : Altitude difference at the abort/safety MacCready setting (see 6.7)

Alt diff MC current : Altitude difference at the current MacCready setting

From the main Waypoint Info screen, you can access the second page by using the > and < buttons in the bottom left corner of the page. Depending of the type and number of details available for a waypoint, other pages could be available.

Task actions menu

This page contains a column of buttons allowing various actions to be performed:

XCSoar User Manual

Replace in task

Insert in task

:

:

replaces the active waypoint in the task with the selected way- point.

inserts the selected waypoint before the active waypoint in the task.

Append to task

: adds the selected waypoint to the end of the task.

removes the selected waypoint from the task. Note that this option is only visible if the selected waypoint is included in the active task.

sets the waypoint as the home airfield.

switches to pan mode and pans to that waypoint.

Remove from task

Set as new home

Pan to waypoint

Set Active Frequency

Set Standby Frequency

:

:

:

:

:

Airfield information

Edit

: allows to change the various attributes of the selected waypoint

It is a good idea to set your home waypoint from the airfields or waypoint details dialogue. This causes XCSoar to start up at the home location regardless of whether a GPS fix is received. If no home is set, then XCSoar starts in the centre of the terrain map.

This page may contain relevant text from the en-route supplement about the airfield, including runways, radio frequencies, traffic pat- terns, contacts. See Section 14.5.

Waypoint details image

This page shows a satellite image of the waypoint.

XCSoar User Manual

How to set up the detailed waypoint information read Section 14.5.

### 5.4 Waypoint selector dialogue

Nav 1/2 (cid:46) Waypoint List

The waypoint selector is a dialogue that allows waypoints to be easily selected from a potentially large database.

Invoking the selector brings up a filtering dialogue screen with a set of optional filters on the left side of the page, and a list of waypoints on the right, matching all of the filtering conditions set. There are several filters available, which may be used together, individually or not at all.

Name : Selects waypoints, starting with the string typed.

Distance : Filters out waypoints farther than a specified distance from the

aircraft.

Direction : Filters out waypoints that are not in a specified direction from the aircraft. An additional special direction “HDG(xx°)” (“HDG” stands for “heading”) filters waypoints within 30 degrees to ei- ther side of the heading of the glider. This allows the pilot to point the glider at a group of waypoints and quickly find them.

Type : Filters out waypoints that are not of the specified type (Landable point, Airport, Turnpoint, etc.) or that appear in the specified File 1 or File 2 (primary or secondary waypoint file respectively), or in recently-used files.

When filtering by name and type, the list of matching waypoints is sorted by name. When (in addition) filtering by distance or direction, the list of matching waypoints is sorted by distance.

XCSoar User Manual

The list can be scrolled if there is more than one screen full of matching waypoints. To scroll through the list, simply drag with the finger, or move to the bottom (or top) of the list with the cursor.

Selecting an item will result in different behaviour depending on what function opened the waypoint selector. In typical use it brings up the airfields or waypoint details dialogue for the selected waypoint.

### 5.5 Task manager

Nav 1/2 (cid:46) Task

The task manager is used to edit, view, load, save to file, and declare cross country tasks.

The primary page is a calculator. It shows various calculations related to the active task, as described in detail below. In addition, there are buttons for invoking dialogues Turn Points , Manage , and Rules , as well as a button to Close

the task manager.

Task calculator dialog

Calculator

The task calculator dialogue allows the pilot to see the effect of various changes to the task on final performance.

In flight the Task Calculator might also be accessed from the Analysis pages. With pages Task, Climb, and Task Speed a button Task Calc comes up, that directly changes to the Task Calculator screen.

XCSoar User Manual

Estimated task time : This field displays the estimated total time on task to complete

the task at the provided MacCready setting.

Remaining task time : This field displays the time remaining to complete the task.

Task distance : This field displays the total task distance.

Remaining distance : This field displays the remaining distance to complete the task.

Speed estimated : This field displays the estimated average cross-country speed for the task as of task completion, assuming flying the rest of the task at the provided MacCready setting.

Speed average :

Set MacCready : Allows the user to adjust the MacCready value and see the effect

it has on the estimated task time.

AAT range : Allows the user to adjust the targets within the remaining AAT areas, to see the effect it has on estimated task time and task distance.

Speed remaining : This field displays the estimated speed for the remainder of the

task at the provided MacCready setting.

Achieved MacCready : This field displays the achieved MacCready value.

Achieved speed : This field displays the achieved speed

Cruise efficiency : 100 % indicates perfect MacCready performance, greater than 100 % indicates better than MacCready performance is achieved through flying in streets. Less than 100 % is appropriate if you fly considerably off-track. This value estimates your cruise efficiency according to the current flight history with the set MC value. Calculation begins after task is started.

See Section 6.11 for more details on task speed and achieved Mac- Cready calculations.

XCSoar User Manual

On closing the dialogue the entered MacCready value is used as the MacCready setting. If the Cancel button is pushed, the MacCready setting is unaffected.

The Target button, for AAT tasks, adjusts the range (increases or decreases) so that the estimated task time exceeds the assigned task time by less than five minutes. The range is adjusted target-wise. In typical use, all targets are set to “auto” that means the pilot does not have to manually adjust the range to find the course for arrival at the assigned task time, thereby reducing pilot workload.

This page displays an ordered list of the points in the current active task. If there are no waypoints in the active task, there will be only an option to “Add Turnpoint.” By highlighting (tapping) the “Add Turn- point” function, then tapping in the highlighted region, the waypoint selector is displayed, as described above. Highlighting a waypoint from the list and then tapping on the highlighted region adds the waypoint to the task.

Turn Points

Turn Points

Manage

Rules

Manage

This page allows for invoking all operations needed to create new or manage already defined tasks.

New Task Clears the current task and resets the task rules to the default

values.

Declare

If an external logger is connected, this will allow uploading the active task to the logger and declaring it.

Browse Displays a list of all the saved tasks, allowing the pilot to load a previously saved task. Note that this option will overwrite the current active task.

Save

Saves the current active task. Upon tapping the Save button the pilot will be prompted to enter a file name for the task to be saved.

Rules

The values in the menu depend on the task type selected. Clicking any existing value will bring up another menu allowing the pilot to select a different value for this rule. Task types are discussed in more detail below.

Also, tapping on the Rules button again after it is highlighted allows toggling between a “thumbnail” view of the task map and a larger view of the task.

XCSoar User Manual

### 5.6 Task types

XCSoar currently defines three different task types: Racing, AAT, and FAI badges/records.

A brief description of the task types is included below, but this manual does not intend to rephrase FAI rules or contest task types. The reader is encouraged to become thoroughly familiar with each task type by referring to contest rules or FAI rules, which are available at http://www.fai.org.

Racing

(also known as an “assigned task”). The racing task involves flight around each specified turnpoint in the specified order. Selecting the racing task type allows the pilot to enter the following parameters (note that if the option “FAI start/arrival tasks” is “On”, only part of these options is available) :

Arm start manually :

If set to “On”, some extra buttons are presented in order to let you Arm start in menu Nav 1/2 , controlling the detection of the start condition.

as well as Disarm start

Start open time : This is the time when the start zone opens.

Start close time : This is the time when the start zone closes.

Start max. speed : This is the maximum speed allowed in the start observation

zone. This should be set to 0 if there is no limit.

Start max. height : This is the maximum height above the start height reference (AGL or MSL) at which a task can be started. This should be set to 0 for no limit.

Start height ref. : This specifies whether the maximum start height is referenced to ground level of the start point (“AGL”) or Mean Sea Level (“MSL”)

Finish min. height : This is the minimum height based on the finish reference (AGL or MSL) at which a task can be finished. This should be set to 0 for no limit.

Finish height ref. : This specifies whether the minimum finish height is referenced to ground level of the finish point (“AGL”) or Mean Sea Level (“MSL”)

PEV start wait time : This specifies an interval in minutes between the pilot presses the Pilot Event (see 4.10) button and start window opens. If set to 0, the start will open immediately after Pilot Event button is pressed.

PEV start window : This specifies an interval in minutes during which the start win- dow remains open when Pilot Event (see 4.10) start procedure If set to 0, the start window, once opened, remains is used. open forever.

XCSoar User Manual

Assigned area task (AAT) and Modified area task (MAT)

(also known as “Turn Area Task”, or TAT). This is a task through assigned areas (restricted to cylinder or sector observation zones). A minimum task time applies. Rules options for this task type include:

AAT min. time : This is the required minimum time for the task. Refer to contest rules or consult an expert for penalties associated with finishing prior to the minimum time.

Other rules : All other rules stay the same as in case of task type “racing”.

FAI badges/records

The selection of this type of task allows to define the value of the following field:

FAI start/finish rules :

If set to “On”, only the type of start, and the start and end times might be set. If set to “Off”, all other racing task rules might be altered from the FAI standard.

Once the appropriate task type has been selected and start and finish rules have been defined as described above, it is necessary to define the properties of each waypoint in the task.

Once selected, waypoints can be moved with the Up and Down arrows. The first waypoing is automatically set as a start point, and the last as an arrival point.

### 5.7 Turn Points’ task rules

Turn Points

(add Turnpoint)

, up and down arrows, and Make Finish

The Turn Points dialogue brings up the list of waypoints in the task. If no waypoint is already defined, this screen will show an empty list. With an ordered list of waypoints is created. Waypoints can be start point, turnpoint, or finish point. Highlighting any waypoint on the list and either tapping it again or touching the Edit Point button brings up the waypoint definition. Touching Change type will bring up a menu of the various task point types available. Definitions of each point type are given below.

A variety of task rules may be used when specifying tasks, including the common FAI triangles and Assigned Area Tasks (AAT). Many aspects of the rules can also be customised.

Starting and finishing lines are centred on their associated waypoint and aligned perpendicular to the next and previous waypoints respec- tively.

Sector turn-points are 90-degree segments aligned to the bisection of the previous and next waypoints, as commonly used in FAI tasks. There is also support for British BGA, and German DAeC sectors.

XCSoar User Manual

Start point types

The conditions to be met for a valid start depend on the type of start:

Start Cylinder : When the glider leaves the cylinder area.

Start Line : When the glider crosses the start line.

Turnpoint types

The conditions to be met for a valid turnpoint pass depend on its type:

FAI Sector : When the glider has entered the observation zone (OZ), defined by a segment and radial distance from the waypoint. The seg- ment is defined by a 90-degree arc centred about the bisector of inbound and outbound legs, with a distance of 20 km.

Keyhole Sector (DAeC 0.5/10 sector) : When the glider has entered the observation zone, defined by a segment and radial distance from the waypoint. The seg- ment is defined by a 90 degree arc centred about the bisector of inbound and outbound legs, with a distance of 10 km. The observation zone also includes a cylinder of 500 m.

BGA Fixed Course Sector : When the glider has entered the observation zone defined by a segment and radial distance from the waypoint. The segment is defined by a 90-degree arc centred about the bisector of inbound and outbound legs, with a distance of 20 km. The observation zone also includes a cylinder of 500 m (British rules).

BGA Enhanced Option Fixed Course Sector : When the glider has entered the observation zone defined by a segment and radial distance from the waypoint. The segment is defined by a 180-degree arc centred about the bisector of inbound and outbound legs, with a distance of 10 km. The observation zone also includes a cylinder of 500 m (British rules).

Turnpoint Cylinder : When the glider has entered the observation zone defined by a

radial distance from the waypoint.

Symmetric quadrant : A symmetric quadrant with a custom radius.

Area Cylinder (AAT) :

Area Sector (AAT) : When the glider has entered the observation zone defined by the radial distance from the waypoint, and segment for sector areas.

Finish point types

Task completion depends on the finish type:

FAI finish quadrant : A 90 degree sector with a radius of one kilometer. Cross edge

to finish.

Finish line : When the glider crosses the finish line.

XCSoar User Manual

Finish cylinder : When the glider enters the cylinder area.

Automatic advancement is triggered whenever a condition is met. To start an AAT, mixed task, or Racing task the start has to be armed before.

Competition rules may be defined in a profile file for distribution to a group of pilots or task-setters, so all competitors are playing by the same rules!

Additional task rules for valid starts and finishes may also be spec- ified. Starts may have a defined maximum altitude above ground, and a maximum speed. Finishes may have a minimum altitude above ground. These parameters are defined in the page “Default Task Config. 1/3 (cid:46) System in Rules” in the configuration settings in the panels “Task Defaults/Task Rules” and “Task Defaults/Turnpoint Types”. For non-AAT tasks, an option is available to set the minimum finish altitude according to the FAI rule, whereby the minimum finish altitude is above 1000 meters below the start altitude.

One the waypoints (start, turn points with their special features, fin- ish) and task rules defined, there are two things to do:

13.17

### 5.8 Start a task

• In the panel “Manage”, press on

to save the task by giving it a name. If you have just modified an existing task, you can either give it the same or give it another name (to create a new task based on an already-existing one).

Save

• Press on the item Close

of the task manager. After the creations and changes done, the displayed windows may differ. You can choose between Close to use the task you have just modified or created. The button Revert Changes allows to dis- card the changes and continue with the task that was previously loaded. If you have created and saved a new task, it will not be most: you could find it later on in you list of saved tasks. However, the activated task would have been erased from the working memory. You will have to reload the task that you wish to do.

Si you push on Close , the task is started (activated).

### 5.9 Advancing and restarting tasks

At all times one waypoint in the task is designated as the active way- point. The active waypoint is used for calculation and display of navigation information, that is, the pilot is directed to fly towards the active waypoint (also referred to as the “next waypoint” in the description of InfoBoxes as in Chapter 12).

XCSoar User Manual

During flight a continuous display of the bearing to the next waypoint is shown.

The altitude required to complete the task is calculated for the route starting from the glider’s actual position going through the task’s turnpoints to the final waypoint.

Changing the active waypoint is performed automatically, or may be performed manually. The start point of racing tasks, and AAT task points, are special cases that require the task point to be “armed” before the system will automatically advance to the next task point once that point is reached. All other task points will automatically advance to the next point as soon as the last point was reached.

For non-racing tasks, no user interaction is required to advance through the task — the system will automatically advance as each task point is achieved. The user may still manually advance or retreat the active task point by selecting the menu items Nav (cid:46) Previous turnpoint and Nav (cid:46) Next turnpoint

respectively.

The menu items Previous turnpoint and Next turnpoint show dynamic labels that indicate the action that will be performed upon selecting the item.

For task points requiring arming, Next Turnpoint becomes Arm turn if the turn is not armed; if it is armed, then it becomes Next Turnpoint allowing for manual advance. if the turn is armed and vice versa. Similarly, for racing tasks these menu items update for arming start points. If the Next Turnpoint is the

, the menu label changes accordingly.

Previous Turnpoint changes to Disarm turn

Finish Turnpoint

Status messages are given for task points requiring arming, when inside the observation sector, as reminders to arm the turn when the pilot is ready to advance to the next waypoint. For starting, a warning is given that the glider is in the start cylinder or behind the start line, as a reminder to “arm” if necessary.

For PC with touchscreen, the user may manually cycle through the waypoints by highlighting the waypoint and by pushing the up or down cursor key.

See Section 5.7 for details on observation rules.

If a user has cycled through the waypoint manually, this does not mean that the glider has successfully passed the waypoint! However, this facility is useful to force a task restart or to skip a waypoint when flying a casual cross-country task.

Tasks can be restarted simply by manually cycling back through the waypoints to the start.

In all modes, if the glider re-enters the start zone or crosses the start of the previous start, the task will be automatically restarted.

XCSoar User Manual

Previous turnpoint

When selecting , the trigger that detects auto- advance for that waypoint is cleared; meaning that the task manager expects the aircraft to fly to that observation zone (OZ) again before continuing the task. The pilot may still select to advance to the next task waypoint.

Next turnpoint

A system beep and message is given on task/waypoint advance. The messages are given when the system advances the task waypoint au- tomatically or, in manually arm mode, when the system is armed and the aircraft is in sector:

Task start : appears when the aircraft has crossed the start line or exited the

start sector. This can be repeated any time.

Next turnpoint : appears when the aircraft has entered the observation sector for turnpoints. Turns with variable target advance as soon as is pushed. For the manual arm mode, if the aircraft Arm Turn has already entered the observation sector and left, pushing arm will cause the task manager to expect, that the turn is intended to approach another time.

Task finish : appears when the aircraft has crossed the finish line or entered

the finish cylinder. This occurs in both advance modes.

### 5.10 Alternate starts

The task system allows alternate start sectors to be defined:

Nav 1/2 (cid:46) Task

(cid:46) Turn Points

select start point, Edit Point (cid:46) Enable Alternate Starts

On the start point edit page of the Task Manager turn on the Enable Alternate Starts property. Another screen is brought up for defining an alternate If alternate start points have been defined before, label start point. . After selecting Enable Alternate Starts “Add Alternate Start” and touching Relocate the “Select Waypoint” filtering dialogue is invoked.

changes to

Edit Alternates

Having set up several alternate start points, the “next waypoint” scheme again will be extended. Before detection of a valid start and having armed start manually, the menu buttons stepping through all the waypoints will show label Next Start

.

Summarizing, all dynamic menu labels in menu Nav 1/2 show com- mands to be executed for selecting waypoints and conditions either consecutively or in reverse order.

### 5.11 Abort/resume the task and Alternates

If atmospheric conditions change for the worse, you may make the judgement that it will be impossible to complete the task. In this situation, XCSoar can be instructed to “abort” the task, and it will then help you reach a safe landing site. An ordered task can be aborted in different ways. Either it is done by selecting a waypoint and execute

XCSoar User Manual

the goto command or by invoking the abort mode. In either case, the ordered task might be resumed.

Task Abort

Nav 2/2 (cid:46) Task Abort

13.13

Alternates

Nav 1/2 (cid:46) Alternates

13.10

Invoking the abort mode forces XCSoar to enter a special case of the final glide mode. For a discussion on flight modes refer to Section 6.1. In this flight mode the configuration option ‘reach polar’ determines whether waypoint arrival heights in abort mode uses the MacCready value prior to aborting the task, or if the safety MacCready value is used. Default is to use the safety MacCready value. When switching to abort mode, the MacCready setting is set to the safety value if it is lower than the current setting.

With invoking abort mode the cross-country task is disabled. On the map radials are drawn pointing to the nearest landables to instantly support the pilot’s decision. As is during the whole flight, the group of nearby landables is maintained permanently. Radials and nearest landables may change dynamically when in abort mode, so that at any time several landing options are presented and any of these may be selected as the active waypoint. Even if no landable is in reach, the radials are drawn. If conditions improve, the task can be resumed by selecting the same menu button that aborted the task, now denoting Resume Task . The active waypoint, prior to aborting the task, is then restored along with all the other task details.

Alternates are maintained throughout the flight, reflecting good air- menship by always keeping an eye on possible alternates. Six landing options are maintained. They are filtered by the configured “alternates mode” criteria (Simple, Task, or Home). Choosing Task or Home puts some bias on the presentation of alternates to the heading, you were taking whilst still task oriented.

As is with every waypoint list, additional information might be called by tapping Details before deciding which final to go. Select a way- point from the list and push Goto .

Although the items on the alternate list obey different rules they in- teract in the same way with the current task. Choosing a target from the alternates list aborts the task; once the conditions get better the resuming of the task is doable by the already mentioned button.

### 5.12 Task status

The status dialogue gives a summary of important task information. It can be useful to give a good overview of the task status while freeing up InfoBoxes for other purposes. The status dialogue can be referred to in order to confirm that a valid start was detected, as well as the progress against the task. The status dialogue can be invoked by menu

Info 2 (cid:46) Status

XCSoar User Manual

or gesture left down right down left, denoting an S. The status tabs ‘Task’ and ‘Rules’ are of interest.

The task tab shows the AAT times, distances achieved and remaining and the task speeds. The rules tab shows the validity of start/finish according to the task rules.

Task

Rules

### 5.13 Assigned Area Tasks

AAT targets

Manually moving targets

A target is a point within an AAT area that the pilot intends to fly to. These targets can be moved within the AAT areas so the pilot can adjust the effective distance of the task. Targets may be set on the ground, during task planning, and modified during flight.

When flying an AAT task, the navigation system directs the glider to the target, and statistics like distance to waypoint are also relative to the target rather than the waypoint of the AAT area itself.

Automatic task waypoint advancement does not trigger when entering an AAT area solely. The pilot has to arm the turn manually to advance to the next turn. When arming the AAT turn while flying through the OZ also the task optimiser is triggered to capture the realized AAT target and bring the target optimisation for the rest of the task up to date. See Section 5.9 for details.

In order to make the specification of targets more straightforward, their location is defined by a range parameter that determines how far from the minimum to maximum possible distance the target is. This is expressed as a percentage. For example, with range set to 100%, the target is located to give the maximum overall task distance. With range set to −100%, the target is located to give the minimum overall task distance.

Zero range yields a nominal task distance: for sectors the target is half way along the bisector radial; for cylinders the target is in the center of the cylinder.

XCSoar User Manual

The task calculator dialogue (see Section 5.5), shows the average percentage over all turns in the AAT Range field. The targets can be individually modified from the target dialogue of the task calculator.

AAT targets and the Task Calculator

Config. 1/3 (cid:46) Flight Config. 1/3 (cid:46) Wind

Target projection

The typical use of targets in flying AAT is as follows:

• Set the expected MacCready, bugs/ballast and wind settings for

the flight using the dialogues and .

• Define the task as normal from the task editor.

• Based on the pilot’s judgement of how good the weather is, and whether some areas are likely to be more or less difficult than others, targets may be set individually for each turn-point in the target view. The ETE field in the target view compared to the assigned minimum time is shown as Delta T to check if the planned task is efficient and long enough.

• During flight, if situations change, such as changed MacCready setting or wind, the task calculator can be brought up to show the estimated task time, again allowing comparison to the as- signed minimum time.

• If the pilot decides to extend or shorten the flight, all the re-

maining targets can be modified from the task calculator.

The task calculator therefore allows the pilot to make (and help to answer) ‘what if?’ questions, for example:

• What will happen if the conditions improve? The MacCready setting can be increased and the pilot can see if there is sufficient adjustment to targets in order to be able to extend the planned task.

• What will happen if the conditions deteriorate? The MacCready setting can be decreased and the pilot can see how much the task can be shortened and still finish the task later than the assigned minimum time.

• What will happen if I leave the AAT area now? By pressing the take over of the current position into the opti- Arm turn mization can be forced. The repositioning of subsequent turns can be reviewed in the task calculation dialogue.

XCSoar continually analyses the path of the glider through AAT sec- tors to find the points in previous AAT sectors through which the achieved scoreable distance will be greatest. Internally, the program moves the targets for previous AAT sectors, which are then the optimal targets.

XCSoar User Manual

In certain conditions, targets for the current AAT sector may be moved automatically:

• When inside an AAT sector, the target in that sector is moved to a line projecting from the previous sector’s target through the aircraft, at the same distance from the previous sector’s target to the target prior to entering the sector. The effect of this is to allow pilots to choose to enter an AAT sector in a different direction or offset from the direct line from the previous target to the current target.

• While the aircraft is in the AAT sector and the distance from the previous target to the aircraft is greater than the distance from the previous target to the current target, the target is moved further along the projected line from the previous target to the aircraft, just beyond the aircraft. Hence, the black track line will not be visible but the blue optimal track arrow will point along this projected direction.

A worked example is provided in the following figures to illustrate how targets move during a flight and to show how XCSoar determines the maximum scored path.

XCSoar User Manual

Outside sector Target (-20%) is on bisector

Inside sector Target moved along track line

User decreased range Target (-80%) moved along track line

User increased range Target (80%) moved along track

Analysis (task page) Path around active target

Next waypoint “Arm Turn” pressed

XCSoar User Manual

Analysis (task page) Best scored target found

Approaching next area Target (60%) is on bisector

Inside sector Target (60%) moved along track line

Next waypoint “Arm Turn” pressed

Analysis (task page) Best scored targets found

XCSoar User Manual

### 5.14 Contest

13.17

The analysis dialogue contains a page “Contest” which can be used to show the optimal path and estimated score. The configuration settings (task rules page) allows the selection of which set of rules to be used for the selected contest (like OLC or WeGlide) optimisation.

The optimization is done continuously in the background and can be retrieved at any time. The analysis page shows a graphical overview of the optimisation result besides distance and score. An InfoBox is available which gives the instant selected contest distance and score as well.

### 5.15 Logger

When flying for contests, either AAT or non-AAT tasks may still be used to manage the flight navigation. During flight, the computer will optimise the current flight with respect to the selected contest rules.

In the contest analysis page, the aircraft track is shown as a thin green line, the optimal path is shown as a thick red line.

The score and computed optimal distance is approximate.

When the aircraft has landed, the displayed result is not updated anymore.

A flight logger conforming to the IGC file specification can be used to record flights.

Several flight loggers are accessible via XCSoar:

• A software-based logger. All versions of XCSoar have this func- tionality. The logger conforms to the IGC standard but is not certified.

XCSoar User Manual

13.28

Setup

Logger activation

• XCSoar can also send declarations to some external logger de- vices. For this to work, the device must be specified in the ‘Devices’ section of the configuration settings.

• For some of the numerous logger devices XCSoar can download IGC files. This is convenient especially for logger devices which are not that easily removable from the glider.

For a complete matrix of the supported logger features see Section 2.5. The configuration is described in detail in Section 13.23. Details to the log files can be found in Section 14.10.

The logger can be turned on and off automatically or manually. For para-glider XCSoar provides the option to only start the logger au- tomatically. Thus a very slow and close to the terrain flight won’t automatically stop logging the flight. If you choose the auto start only logger you have to stop the logger manually. To turn the logger on (or off) manually, select from the menu:

Config 3 (cid:46)

Logger

Start

When the internal software logger is active, a small ‘green status led’ in the lower right corner of the map area flashes once per second.

By default, XCSoar is set up to automatically start and stop the in- ternal software flight logger when it detects the aircraft is flying and when it has landed, respectively. Only when the logger is manually started does it ask if the flight is to be declared; when automatically starting it automatically declares the current task. In simulation mode the logger does not get activated automatically.

If a task has been declared, then subsequent attempts at modifying the task result in a warning message asking to confirm whether the action is to be taken and invalidate the declaration. This is intended to make it harder to accidentally modify the task resulting in a failed declared task.

The XCSoar software logger, when started, checks for 500 kB of free space on the file storage. If there is insufficient space, it will automat- ically delete IGC files, oldest first, in order to free up 500kB. It does not ask the user for confirmation before performing this operation.

The internal software logger buffers data so that when it starts (au- tomatically or manually) up to 60 seconds of data prior to starting is recorded. This means that the software logger now adequately cap- tures the full take-off.

XCSoar User Manual

Logger replay

Flight logs in the IGC format generated by XCSoar or other loggers can be replayed. The logger replay dialogue can be accessed via the menu:

Config 2 (cid:46) Replay

During replay, the word ‘REPLAY’ appears at the lower left corner of the screen. During replay, the program behaves as if real GPS updates are being received by a GPS.The logger replay dialogue does not need to be open during replay.

To start a log replay, first select the file to load, and then select the button. The replay can be performed in accelerated time by Start changing the time scale from 1x to a higher number, and paused by setting the time scale to zero. High time scales can result in degraded performance of the wind estimation and other statistics/analysis rou- tines.

Stop the log by pressing Stop . Once a log is started, further presses of the

Start has the effect of restarting the replay.

After a log file has been replayed, it is recommended to reset the device before flight, in order to ensure that XCSoar’s internal statistics are properly reset.

When operating XCSoar in FLY mode, the replay is disabled (stopped) if the real GPS receiver detects that the aircraft is moving.

The logger replay works best with high sampling rate log files; a 6 sec- ond interval or less works fine.

For the pure reason of tracking down error prone behaviour of XCSoar there is a ‘Raw Logger’. In case you are able to reproduce an error you can activate the raw log file creation by:

Config 3 (cid:46) Raw Logger

Developers will appreciate very much any detailed error description including a log file like this. It really facilitates the root cause analysis and saves time to fix an error.

Error analysis logger

### 5.16 Flight analysis

Up - Right - Down

The analysis dialogue is very useful in planning and conducting cross- country flights. It is accessed via the menu:

Info 1 (cid:46) Analysis

Several pages are of interest:

XCSoar User Manual

Barograph : Shows a graph of the history of the altitude of the glider. Statis- tics are used to estimate the thermal working band (average base and ceiling of climbs) and to estimate how the ceiling is changing over time. The base and ceiling lines are drawn on the barograph.

The ‘Settings’ button opens the flight settings dialogue, allow- ing to alter the values of ballast, bugs, QNH and maximum temperature.

Climb history : Shows a bar chart of the average climb rate achieved during each climb. Statistics are used to estimate the overall average climb rate, and to estimate how this average is changing over time. The current MacCready setting is drawn on the bar chart as a thick red dashed line, and the climb rate trend is drawn on the chart as a blue line.

The “Task Calc” button opens the task calculator, (e.g. to adjust the MC value).

Task : This page shows an overview of the entire task. The main task line is drawn in thick dashed green, AAT areas are shaded. For

XCSoar User Manual

AAT tasks, the path from the aircraft around the remaining targets within AAT areas is shown in red. The aircraft track is shown as a thin green line.

The ‘Task Calc’ button opens the task calculator, (e.g. to adjust the AAT task range or MC value).

### 5.17 Sunlight and time

A sun ephemeris computes the time of sunrise and sunset, which is displayed in the Aircraft Status dialogue (see Section 4.13). Note that local terrain and atmospheric conditions may result in poor visibility before the displayed sunset time.

For PDA systems, the clock is adjusted for daylight saving time ac- cording to the settings in the operating system.

If the expected arrival time at the final waypoint in the task is past sunset, a status message warning is issued.
