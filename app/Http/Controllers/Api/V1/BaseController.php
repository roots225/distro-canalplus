<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function __construct() {
        // TODO : check if user can access api routes
    }

    public function successResponse($data) {
        return response()->json([
            'data' => $data
        ]);
    }

    public function errorResponse($error) {
        return response()->json([
            'data' => null,
            'error' => $error
        ]);
    }
}
