<?php

namespace App\Http\Controllers;

use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    public function getFeaturedProduct(){
        return ProductListModel::where("remark","FEATURED")->get();
    }

    public function getSpecialProduct(){
        return ProductListModel::where('remark',"SPECIAL")->get();
    }

    public function getSubCategoryProduct($category, $subCategory){
        return ProductListModel::where("category", $category)->where("subcategory", $subCategory)->get();
    }
    public function getCategoryProduct($category){
        return ProductListModel::where("category", $category)->get();
    }
    public function getNewProduct(){
        return ProductListModel::orderBy('id','desc')->take(5)->get();
    }
}

