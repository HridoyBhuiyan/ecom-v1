<?php

namespace App\Http\Controllers;

use App\Models\ProductDetailsModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    function productDetails($productCode){
        $dataFromProductDetails = ProductDetailsModel::where("product_code", $productCode)->first();
        $dataFromProductList = ProductListModel::where('product_code', $productCode)->first();
        return response()->json([
            "detailsData"=>$dataFromProductDetails,
            "listedData"=>$dataFromProductList
        ]);
    }


//    this is now using anyway. just for test purpose
    function productDetailsOnBanner(){
        $productList = ProductListModel::where('remark',"BANNER")->get();
        $productBanner = array();
        foreach ($productList as $data){
            $details = ProductDetailsModel::where('product_code',$data['product_code'])->first();

            $productData = [
                "id"=>$data->id,
                "title"=>$data->title,
                "price"=>$data->price,
                "special_price"=>$data->special_price,
                "image"=>$data->image,
                "category"=>$data->category,
                "subcategory"=>$data->subcategory,
                "remark"=>$data->remark,
                "brand"=>$data->brand,
                "star"=>$data->star,
                "product_code"=>$data->product_code,
                "img1"=>$details->img1,
                "img2"=>$details->img2,
                "img3"=>$details->img3,
                "img4"=>$details->img4,
                "color"=>$details->color,
                "size"=>$details->size,
                "details"=>$details->details,
                "short_details"=>$details->short_details
            ];


            array_push($productBanner,$productData);
        }

        return $productBanner;
    }
}
