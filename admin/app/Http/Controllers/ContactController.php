<?php

namespace App\Http\Controllers;

use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function getContactDetail(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $msg = $request->input('text');

        date_default_timezone_set("Asia/Dhaka");
        $contact_time=date('h:i:sa');
        $contact_date = date("d-m-y");



        $result = ContactModel::insert([
            "name"=>$name,
            "email"=>$email,
            "message"=>$msg,
            "contact_date"=>$contact_date,
            "contact_time"=>$contact_time
        ]);

        return $result;

    }
}
