<?php

namespace App\Http\Controllers;

use App\Models\VisitorModel;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    public function getVisitedData($ip){
        $result = VisitorModel::insert([
            "ip_address"=>$ip,
            "visit_time"=>now(),
            "visit_date"=>date("h:i:sa")
        ]);
        return $result;
    }
}
