const muhammara = require('../muhammara')
const fs = require("fs");

describe('AppendPagesTest', function() {
	it('should complete without error', function() {
		var pdfWriter = muhammara.createWriter(__dirname + '/output/AppendPagesTest.pdf');
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/Original.pdf');
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/XObjectContent.PDF');
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/BasicTIFFImagesTest.PDF');

		pdfWriter.end();
	});
});

describe('AppendPagesTest with stream', function() {
	it('should complete without error', function() {
		var pdfWriter = muhammara.createWriter(__dirname + '/output/AppendPagesTest2.pdf');
		const mainStream = new muhammara.PDFRStreamForFile(__dirname + '/TestMaterials/Original.pdf');
		pdfWriter.appendPDFPagesFromPDF(mainStream);
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/XObjectContent.PDF');
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/BasicTIFFImagesTest.PDF');

		pdfWriter.end();
	});
});


describe('AppendPagesTest with stream', function() {
	it('should complete without error', function() {
		var fs = require('fs')
		fs.copyFileSync(__dirname + '/TestMaterials/Original.pdf', __dirname + '/output/AppendPagesTest3Original.pdf')
		var pdfWriter = muhammara.createWriterToModify(
			__dirname + '/output/AppendPagesTest3Original.pdf'
		);

		const mainStream = new muhammara.PDFRStreamForFile(__dirname + '/TestMaterials/Original.pdf');
		pdfWriter.appendPDFPagesFromPDF(mainStream);
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/XObjectContent.PDF');
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/BasicTIFFImagesTest.PDF');

		pdfWriter.end();
	});
});


describe('AppendPagesTest with streams on both ends', function() {
	it('should complete without error', function() {
		var fs = require('fs')
		fs.copyFileSync(__dirname + '/TestMaterials/Original.pdf', __dirname + '/output/AppendPagesTest4Original.pdf')
		var pdfWriter = muhammara.createWriterToModify(
			new muhammara.PDFRStreamForFile(__dirname + '/output/AppendPagesTest4Original.pdf'),
			new muhammara.PDFWStreamForFile(__dirname + '/output/AppendPagesTest4Original.pdf')
		);

		const mainStream = new muhammara.PDFRStreamForFile(__dirname + '/TestMaterials/Original.pdf');
		pdfWriter.appendPDFPagesFromPDF(mainStream);
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/XObjectContent.PDF');
		pdfWriter.appendPDFPagesFromPDF(__dirname + '/TestMaterials/BasicTIFFImagesTest.PDF');

		pdfWriter.end();
	});
});

