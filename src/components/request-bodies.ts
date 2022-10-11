/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
export type Profile =
  | "barcodeRecognition"
  | "documentArchiving"
  | "documentConversion"
  | "textExtraction";

export type TextType =
  | string
  | "cmc7"
  | "e13b"
  | "gothic"
  | "index"
  | "matrix"
  | "normal"
  | "ocrA"
  | "ocrB"
  | "typewriter";

export type ImageSource = "auto" | "photo" | "scanner";

export type DocumentExportFormat =
  | string
  | "alto"
  | "docx"
  | "pdfa"
  | "pdfSearchable"
  | "pdfTextAndImages"
  | "pptx"
  | "rtf"
  | "txt"
  | "txtUnstructured"
  | "xlsx"
  | "xml"
  | "xmlForCorrectedImage";

export type BusinessCardExportFormat = "csv" | "vCard" | "xml";

export type PdfWriteTags = "auto" | "dontWrite" | "write";

export type MarkingType =
  | "charBoxSeries"
  | "combInFrame"
  | "greyBOxes"
  | "partitionedFrame"
  | "simpleComb"
  | "simpleText"
  | "textInFrame"
  | "underlinedText";

export type CheckmarkType = "circle" | "empty" | "square";

export type BarcodeType =
  | "autodetect"
  | "aztec"
  | "codabar"
  | "code39"
  | "code93"
  | "code128"
  | "dataMatrix"
  | "ean8"
  | "ean13"
  | "iata25"
  | "industrial25"
  | "interleaved25"
  | "matrix25"
  | "patch"
  | "pdf417"
  | "postNet"
  | "qrCode"
  | "ucc128"
  | "upca"
  | "upce";

export interface MethodWithImage {
  readonly pdfPassword?: string;
  readonly description?: string;
}
export interface MethodWithoutImage {
  readonly taskId: string;
  readonly description?: string;
}

export interface ProcessImageParameters extends MethodWithImage {
  readonly language?: string;
  readonly profile?: Profile;
  readonly textType?: TextType;
  readonly imageSource?: ImageSource;
  readonly correctOrientation?: boolean;
  readonly correctSkew?: boolean;
  readonly readBarcodes?: boolean;
  readonly exportFormat?: DocumentExportFormat;
  readonly "xml:writeFormatting"?: boolean;
  readonly "xml:writeRecognitionVariants"?: boolean;
  readonly "xml:writeWordRecognitionVariants"?: boolean;
  readonly "pdf:writeTags"?: PdfWriteTags;
  readonly "txtUnstructured:paragraphAsOneLine"?: boolean;
}

export interface ProcessBusinessCardParameters extends MethodWithImage {
  readonly language?: string;
  readonly imageSource?: ImageSource;
  readonly correctOrientation?: boolean;
  readonly correctSkew?: boolean;
  readonly exportFormat?: BusinessCardExportFormat;
  readonly "xml:writeExtendedCharacterInfo"?: boolean;
  readonly "xml:writeFieldComponents"?: boolean;
}

export interface ProcessTextFieldParameters extends MethodWithImage {
  readonly region?: string;
  readonly language?: string;
  readonly letterSet?: string;
  readonly regExp?: string;
  readonly textType?: TextType;
  readonly oneTextLine?: boolean;
  readonly oneWordPerTextLine?: boolean;
  readonly markingType?: MarkingType;
  readonly placeholdersCount?: number;
  readonly writingStyle?: string;
}

export interface ProcessFieldsParameters extends MethodWithoutImage {
  readonly writeRecognitionVariants?: boolean;
}

export interface ProcessCheckmarkFieldParameters extends MethodWithImage {
  readonly region?: string;
  readonly checkmarkType?: CheckmarkType;
  readonly correctionAllowed?: boolean;
}

export interface ProcessDocumentParameters extends MethodWithoutImage {
  readonly language?: string;
  readonly profile?: Profile;
  readonly textType?: TextType;
  readonly imageSource?: ImageSource;
  readonly correctOrientation?: boolean;
  readonly correctSkew?: boolean;
  readonly readBarcodes?: boolean;
  readonly exportFormat?: DocumentExportFormat;
  readonly "xml:writeFormatting"?: boolean;
  readonly "xml:writeRecognitionVariants"?: boolean;
  readonly "xml:writeWordRecognitionVariants"?: boolean;
  readonly "pdf:writeTags"?: PdfWriteTags;
  readonly "txtUnstructured:paragraphAsOneLine"?: boolean;
}

export interface ProcessBarcodeFieldParameters extends MethodWithImage {
  readonly region?: string;
  readonly barcodeType?: BarcodeType;
  readonly containBinaryData?: boolean;
}

export interface SubmitImageParameters {
  readonly taskId?: string;
  readonly pdfPassword?: string;
}

export interface ListTasksParameters {
  readonly fromDate?: string;
  readonly toDate?: string;
  readonly excludeDeleted?: boolean;
}

export interface GetTaskStatusParameters {
  readonly taskId: string;
}

export interface DeleteTaskParameters {
  readonly taskId: string;
}
