<?php

namespace App\Http\Controllers;

use App\Models\SiteinfoModel;
use Illuminate\Http\Request;

class SiteinfoController extends Controller
{
    public function sendSiteInfo(){
        return SiteinfoModel::get();
    }
}
