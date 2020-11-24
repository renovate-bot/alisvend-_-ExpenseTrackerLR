<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
class CategoryController extends Controller
{
    public function getCategories()
    {
        $categories = Category::all();

        return $categories;
    }

    public function store(Request $request)
    {


        
        $category= new Category();
        
        
        $category->name = $request->get('name');
        
       
        $category->save();

      


    }
}
