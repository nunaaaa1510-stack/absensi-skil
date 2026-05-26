<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Setting;
use App\Models\Attendance;

class AttendanceController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | INDEX
    |--------------------------------------------------------------------------
    */

    public function index()
    {
        $attendances = Attendance::where(
            'user_id',
            auth()->id()
        )->latest()->get();

        $setting = Setting::first();

        $users = User::where(
            'role',
            'employee'
        )->latest()->get();

        return view('attendance', compact(
            'attendances',
            'setting',
            'users'
        ));
    }

    /*
    |--------------------------------------------------------------------------
    | CHECK IN
    |--------------------------------------------------------------------------
    */

    public function checkIn(Request $request)
    {
        Attendance::create([

            'user_id' => auth()->id(),

            'date' => now()->toDateString(),

            'check_in' => now(),

            'latitude' => $request->latitude,

            'longitude' => $request->longitude,

        ]);

        return back();
    }

    /*
    |--------------------------------------------------------------------------
    | CHECK OUT
    |--------------------------------------------------------------------------
    */

    public function checkOut()
    {
        $attendance = Attendance::where(
            'user_id',
            auth()->id()
        )
        ->whereNull('check_out')
        ->latest()
        ->first();

        if ($attendance) {

            $attendance->update([

                'check_out' => now()

            ]);

        }

        return back();
    }
}