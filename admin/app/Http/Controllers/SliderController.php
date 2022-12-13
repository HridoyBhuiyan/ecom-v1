<?php

namespace App\Http\Controllers;

use App\Models\SliderModel;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function sendSliderInfo(){
        return SliderModel::all();
    }
}
