<?php

namespace App\Http\Controllers;
use Auth;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class UserController extends Controller
{
    //
    function getCurrentUser(Request $request){
        return json_encode(Auth::user());
    }
}
