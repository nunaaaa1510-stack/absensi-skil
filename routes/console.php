<?php

use Illuminate\Support\Facades\Schedule;

Schedule::command('app:auto-checkout')
    ->everyMinute();