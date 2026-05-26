<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

use App\Models\Setting;
use App\Models\Attendance;
use App\Models\User;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AttendanceController;

/*
|--------------------------------------------------------------------------
| ROOT
|--------------------------------------------------------------------------
*/

Route::get('/', function () {

    auth()->logout();

    request()->session()->invalidate();

    request()->session()->regenerateToken();

    return redirect('/login');

});

/*
|--------------------------------------------------------------------------
| DASHBOARD
|--------------------------------------------------------------------------
*/

Route::get('/dashboard', function () {

    if (auth()->user()->role === 'admin') {

        return redirect('/admin');

    }

    return redirect('/attendance');

})->middleware(['auth', 'verified'])->name('dashboard');

/*
|--------------------------------------------------------------------------
| AUTH
|--------------------------------------------------------------------------
*/

Route::middleware(['auth'])->group(function () {

    /*
    |--------------------------------------------------------------------------
    | ATTENDANCE
    |--------------------------------------------------------------------------
    */

    Route::get('/attendance', [
        AttendanceController::class,
        'index'
    ]);

    Route::post('/attendance/checkin', [
        AttendanceController::class,
        'checkIn'
    ]);

    Route::post('/attendance/checkout', [
        AttendanceController::class,
        'checkOut'
    ]);

    /*
    |--------------------------------------------------------------------------
    | SETTINGS
    |--------------------------------------------------------------------------
    */

    Route::post('/settings/update', function (Request $request) {

        $request->validate([
            'auto_checkout_time' => 'required'
        ]);

        $setting = Setting::first();

        if (!$setting) {

            Setting::create([

                'auto_checkout_time' =>
                    $request->auto_checkout_time . ':00'

            ]);

        } else {

            $setting->update([

                'auto_checkout_time' =>
                    $request->auto_checkout_time . ':00'

            ]);

        }

        return back();

    });

    /*
    |--------------------------------------------------------------------------
    | ADMIN
    |--------------------------------------------------------------------------
    */

    Route::get('/admin', function () {

        if (auth()->user()->role !== 'admin') {

            abort(403);

        }

        return redirect('/attendance');

    });

    /*
    |--------------------------------------------------------------------------
    | EMPLOYEE MANAGEMENT
    |--------------------------------------------------------------------------
    */

    Route::post('/employees/create', function (Request $request) {

        if (auth()->user()->role !== 'admin') {

            abort(403);

        }

        $request->validate([

            'name' => 'required',

            'email' => 'required|email|unique:users',

            'password' => 'required|min:6',

        ]);

        User::create([

            'name' => $request->name,

            'email' => $request->email,

            'password' => Hash::make(
                $request->password
            ),

            'role' => 'employee',

        ]);

        return back();

    });

    Route::post('/employees/delete/{id}', function ($id) {

        if (auth()->user()->role !== 'admin') {

            abort(403);

        }

        $user = User::findOrFail($id);

        if ($user->role === 'admin') {

            return back();

        }

        $user->delete();

        return back();

    });

    /*
    |--------------------------------------------------------------------------
    | PROFILE
    |--------------------------------------------------------------------------
    */

    Route::get('/profile', [
        ProfileController::class,
        'edit'
    ])->name('profile.edit');

    Route::patch('/profile', [
        ProfileController::class,
        'update'
    ])->name('profile.update');

    Route::delete('/profile', [
        ProfileController::class,
        'destroy'
    ])->name('profile.destroy');

});

require __DIR__.'/auth.php';