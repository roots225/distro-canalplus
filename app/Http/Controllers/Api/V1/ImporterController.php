<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Models\Distributor;

class ImporterController extends BaseController
{
    public function index() {
        Distributor::truncate();
        
        $file = public_path('COORDONNEES_GPS.csv');
        $content = File::get($file);
        $content = explode(PHP_EOL, $content);

        $savedNumber = 0;
        foreach($content as $key => $line) {
            if ($key != 0) {

                if ($line) {
                    $lineAsArray = explode(';', trim(utf8_encode($line)));
                    
                    [
                        $dist_num,
                        $pdv_name,
                        $localisation,
                        $city,
                        $latitude,
                        $longitude
                    ] = $lineAsArray;

                    $distributor = new Distributor();
                    $distributor->distributor_number = trim($dist_num);
                    $distributor->name = trim($pdv_name);
                    $distributor->localisation = trim($localisation);
                    $distributor->city = trim($city);
                    $distributor->latitude = $this->stringToFloat($latitude);
                    $distributor->longitude = $this->stringToFloat($longitude);
                    $distributor->save();
                    $savedNumber++;
                }
            }
        }

        return $this->successResponse([
            'success' => true,
            'distr_number' => $savedNumber
        ]);
    }

    public function stringToFloat($value):float {
        return floatval(str_replace(',', '.', trim($value)));
    }
}
