<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App;
use App\Expense;

class ExpenseController extends Controller
{

    public function getExpensesByUser()
    {
        $user = Auth::id();
        $expenses = Expense::where('user_id', $user)->orderBy('date', 'Desc')->with('category')->get();
        return $expenses;
    }
    public function store(Request $request)
    {


        
        $expense = new Expense();
        $expense->user_id = Auth::id();
        $expense->category_id = $request->get('category_id');
        $expense->amount = $request->get('amount');
        $expense->date = $request->get('date');
       
        $expense->save();

        // $data=['user_id' => Auth::id(),
        // 'amount' => $request->get('amount'),
        // 'date' => $request->get('date'),
        // 'category_id' => $request->get('category_id')];
        // Expense::create($data);
        //return response()->json(Expense::with('category')->find($expense->id));



    }
    public function update(Request $request)
    {


        
        $expense = App\Expense::find(1);
        $expense->user_id = Auth::id();
        $expense->id=$request->get('id');
        $expense->category_id = $request->get('category_id');
        $expense->amount = $request->get('amount');
        $expense->date = $request->get('date');
       
        $expense->save();

        // $data=['user_id' => Auth::id(),
        // 'amount' => $request->get('amount'),
        // 'date' => $request->get('date'),
        // 'category_id' => $request->get('category_id')];
        // Expense::create($data);
        //return response()->json(Expense::with('category')->find($expense->id));



    }
    public function destroy(Request $request)
    {
          
        $expense = Expense::findOrFail($request->id);
        if (auth()->user()->id != $expense->user_id)
            return response("", 401);
        $expense->delete();
        //return response()->json("successful deletion");
    }
}
