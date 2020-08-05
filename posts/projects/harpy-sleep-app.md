---
title: Harpy - Sleep Assistant App
description: For my final year project at university, I made a mobile app designed to help users improve their quality of sleep.
updatedAt: 2020-06-08
hero_image: /projects/harpy.png
---

![](https://res.cloudinary.com/db9egliyk/image/upload/v1591629647/harpy-screenshot_mai3ao.png)

A website with more information is available at [www.harpy.app](https://www.harpy.app)

  &nbsp;

## What does it do?

Harpy is a mobile app designed to improve your sleep by sending you useful notifications throughout the day to make sure you make the right steps to getting a better night of sleep.

  &nbsp;

• Six hours before you go to sleep is sends you a notification telling you to stop having caffeine as this is the latest time you can ingest coffee without it affecting your sleep.

  &nbsp;

• Two hours before your set sleep time it sends you a notification to tell you to help you acknowledge that you need to start winding down.

  &nbsp;

• One hour before bed it tells you to start getting ready for bed.

  &nbsp;

• In the morning it sends you a good morning notification and turns your light on to help wake you up.

  &nbsp;

• Finally, the app also has calming and relaxing audio and a breathing technique guide to help reduce stress and anxiety if the user is struggling to sleep.

  &nbsp;

Below are videos of the main app screen and the onboarding process. Press the images to play.

  &nbsp;

[![Main Screen](https://img.youtube.com/vi/cTyt9WigSi8/maxresdefault.jpg)](https://www.youtube.com/watch?v=cTyt9WigSi8 "Main Screen")

  &nbsp;

[![Onboarding](https://img.youtube.com/vi/Vk0vt7X86H8/maxresdefault.jpg)](https://www.youtube.com/watch?v=Vk0vt7X86H8 "Onboarding")

  &nbsp;

## Why?

I wanted to make a digital wellbeing app that focused on proactively improving users sleeping patterns. So I decided to apply sleep based research to my app in order to tackle developing a sleep assisting app in a unique approach.

  &nbsp;

## How to test the app

Although the app is designed to work on both iOS and Android, because of restrictions set by iOS to pay for annual licenses to test apps the app is only available to test on Android using the Expo app. Once you have the Expo app, just scan the QR code in the following link [expo.io/@johnsm/harpy](https://expo.io/@johnsm/harpy).

  &nbsp;

## Technologies used

I designed the app using Figma, a component-based interface design tool. I then made the front-end of the app using Expo a React Native based toolchain that helped me to bootstrap and test the application when I was developing it a lot faster. For the backend I use Firebase for user authentication as well as a database to store user data. I also use Firebase for it's Cloud Function to run a cronjob every minute to check for pending user notifications. Firebase was useful to help speed up the development of the backend and because it also runs for free, even with a cronjob running every minute.
