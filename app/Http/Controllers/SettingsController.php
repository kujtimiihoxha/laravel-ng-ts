<?php

namespace App\Http\Controllers;

use App\Settings;
use Illuminate\Http\Request;

use App\Http\Requests;

class SettingsController extends Controller
{
    function getSettingsByName(Request $reques, $name){
        return json_encode(Settings::where("name",$name)->first());
    }
}
