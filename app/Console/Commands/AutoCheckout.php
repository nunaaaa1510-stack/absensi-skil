<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Attendance;
use App\Models\Setting;

class AutoCheckout extends Command
{
    protected $signature = 'app:auto-checkout';

    protected $description = 'Auto checkout attendance';

    public function handle()
    {
        $setting = Setting::first();

        if (!$setting) {

            $setting = Setting::create([
                'auto_checkout_time' => '17:00:00'
            ]);
        }

        $currentTime = now()->format('H:i');

        $settingTime = substr(
            $setting->auto_checkout_time,
            0,
            5
        );

        $this->info('NOW: ' . $currentTime);
        $this->info('SETTING: ' . $settingTime);

        if ($currentTime >= $settingTime) {

            $attendances = Attendance::whereDate(
                'date',
                now()->toDateString()
            )
            ->whereNull('check_out')
            ->get();

            $this->info('FOUND: ' . $attendances->count());

            foreach ($attendances as $attendance) {

                $attendance->update([
                    'check_out' => now()->format('H:i:s')
                ]);
            }

            $this->info('AUTO CHECKOUT SUCCESS');
        }
    }
}