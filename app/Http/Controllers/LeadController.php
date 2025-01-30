<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        // Validate the form data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'location' => 'required|string|max:255',
            'property_type' => 'required|string',
            'bedrooms' => 'required|integer|min:0',
            'message' => 'nullable|string',
        ]);

        // Save the data to the database
        Lead::create($request->all());

        // Return a success response
        return response()->json(['message' => 'Lead submitted successfully!'], 201);
    }
}
