<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Codedge\Fpdf\Fpdf\Fpdf;


class PdfController extends Controller
{
    public function generarPDF()
    {

        $pdf = new FPDF();
        $pdf->AddPage();
        $pdf->SetFont('Arial', '',15);
        $pdf->Cell(40,8,'logo',0,1);
        $pdf->SetFont('Arial','',8);

        $x1 = 70;
        $pdf->SetXY($x1,12);
        $pdf->Cell(40,5,'CALIDAD.',0,1);
        $pdf->SetXY($x1,17);
        $pdf->Cell(40,5,utf8_decode('Orizaba #208 Int. 105 Col. Roma Norte Alcladía'),0,1);
        $pdf->SetXY($x1,22);
        $pdf->Cell(40,5,utf8_decode('Cuauhtémoc C.P. 06700 Ciudad de México, México'),0,1);
        $pdf->SetXY($x1,27);
        $pdf->Cell(40,5,utf8_decode('TEL.'),0,1);
        $pdf->SetXY($x1,32);
        $pdf->Cell(40,5,utf8_decode('Email'),0,1);
        $pdf->SetXY($x1,37);
        $pdf->Cell(40,5,utf8_decode('R.F.C'),0,1);

        $pdf->SetXY(150,22);
        $pdf->Cell(40,5,utf8_decode('Fecha:'),0,1);
        $pdf->SetXY(150,27);
        $pdf->Cell(40,5,utf8_decode('No:'),0,1);
        $pdf->SetXY(150,32);
        $pdf->Cell(40,5,utf8_decode('Referencia'),0,1);
        
        $pdf->SetXY(170,22);
        $pdf->Cell(40,5,utf8_decode('01/01/2024'),0,1);
        $pdf->SetXY(170,27);
        $pdf->Cell(40,5,utf8_decode('54'),0,1);
        $pdf->SetXY(170,32);
        $pdf->Cell(40,5,utf8_decode('54'),0,1);
        // Add more cells for the rest of the address and contact information

        $pdf->Line(10, 45, 200, 45);
        $pdf->SetY(46);
        $pdf->Cell(40,5,'Fecha: 2024-04-11',0,1);
        $pdf->Cell(40,5,utf8_decode('N° Cotización: 54'),0,1);
        // Add more cells for the rest of the quote information
        $pdf->Line(10, 60, 200, 60);

        $pdf->SetY(62);
        $pdf->SetFont('Arial','B',8);
        $pdf->Cell(30,10,utf8_decode('Código de Artículo'),'B',0,'C');
        $pdf->Cell(60,10,utf8_decode('Descripción del Artículo'),'B',0,'C');
        $pdf->Cell(20,10,utf8_decode('Ctdad'),'B',0,'C');
        $pdf->Cell(20,10,utf8_decode('Unidad'),'B',0,'C');
        $pdf->Cell(20,10,utf8_decode('Precio'),'B',0,'C');
        $pdf->Cell(20,10,utf8_decode('% Dscto.'),'B',0,'C');
        $pdf->Cell(20,10,utf8_decode('Total'),'B',0,'C');
        // Add more cells for the product information

        $pdf->Output();

        exit;
    }
    
    public function generarPDFDomPDF()
    {
        $data = [
            'nombre' => 'John Doe',
            // Agrega más datos según tus necesidades
        ];

        $pdf = PDF::loadView('PDF.demo_pdf', $data);
        return $pdf->stream('archivo.pdf');
    }
}
