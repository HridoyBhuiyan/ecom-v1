<?php

namespace App\Http\Controllers;

use App\Models\Category1Model;
use App\Models\Category2Model;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public  function sendCategoryDetails(){
        $parentCategory = Category1Model::get();
        $categoryDetails = array();
        foreach ($parentCategory as $value){
            $parentCategory = $value['cat1_name'];
            $childCategory = Category2Model::where('cat1_name', $parentCategory)->get();
            $category = [
                'parent_category'=>$parentCategory,
                'parent_icon'=>$value['cat1_image'],
                'child_category'=>$childCategory
            ];
            array_push($categoryDetails,$category);
        }
        return $categoryDetails;
    }
}
