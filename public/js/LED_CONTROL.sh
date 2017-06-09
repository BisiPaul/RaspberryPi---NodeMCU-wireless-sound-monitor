#!/bin/bash
for i in {1..8}
do	
	sleep .5
	echo 200 >/sys/class/leds/led0/brightness
	sleep .5
	echo 0 >/sys/class/leds/led0/brightness
done