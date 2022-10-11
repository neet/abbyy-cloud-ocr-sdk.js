export type Profile =
  | "documentConversion"
  | "documentArchiving"
  | "textExtraction"
  | "barcodeRecognition";

export type TextType =
  | "normal"
  | "typewriter"
  | "matrix"
  | "index"
  | "ocrA"
  | "ocrB"
  | "e13b"
  | "cmc7"
  | "gothic"
  | string;

export type ImageSource = "auto" | "photo" | "scanner";

export type DocumentExportFormat =
  | "txt"
  | "rtf"
  | "txtUnstructured"
  | "docx"
  | "xlsx"
  | "pptx"
  | "pdfSearchable"
  | "pdfTextAndImages"
  | "pdfa"
  | "xml"
  | "xmlForCorrectedImage"
  | "alto"
  | string;

export type BusinessCardExportFormat = "vCard" | "csv" | "xml";

export type PdfWriteTags = "auto" | "write" | "dontWrite";

export type MarkingType =
  | "simpleText"
  | "underlinedText"
  | "textInFrame"
  | "greyBOxes"
  | "charBoxSeries"
  | "simpleComb"
  | "combInFrame"
  | "partitionedFrame";

export type CheckmarkType = "circle" | "empty" | "square";

export type BarcodeType =
  | "autodetect"
  | "patch"
  | "code39"
  | "code93"
  | "code128"
  | "ucc128"
  | "interleaved25"
  | "industrial25"
  | "iata25"
  | "matrix25"
  | "ean8"
  | "ean13"
  | "codabar"
  | "upca"
  | "upce"
  | "postNet"
  | "aztec"
  | "dataMatrix"
  | "pdf417"
  | "qrCode";

export interface MethodWithImage {
  readonly pdfPassword?: string;
  readonly description?: string;
}
export interface MethodWithoutImage {
  readonly taskId: string;
  readonly description?: string;
}

export interface ProcessImageParams extends MethodWithImage {
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

export interface ProcessBusinessCard extends MethodWithImage {
  readonly language?: string;
  readonly imageSource?: ImageSource;
  readonly correctOrientation?: boolean;
  readonly correctSkew?: boolean;
  readonly exportFormat?: BusinessCardExportFormat;
  readonly "xml:writeExtendedCharacterInfo"?: boolean;
  readonly "xml:writeFieldComponents"?: boolean;
}

export interface ProcessTextFieldParams extends MethodWithImage {
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

export interface ProcessFieldsParams extends MethodWithoutImage {
  readonly writeRecognitionVariants?: boolean;
}

export interface ProcessCheckmarkField extends MethodWithImage {
  readonly region?: string;
  readonly checkmarkType?: CheckmarkType;
  readonly correctionAllowed?: boolean;
}

export interface ProcessDocumentParams extends MethodWithoutImage {
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

export interface ProcessBarcodeField extends MethodWithImage {
  readonly region?: string;
  readonly barcodeType?: BarcodeType;
  readonly containBinaryData?: boolean;
}

export interface SubmitImageParams {
  readonly taskId?: string;
  readonly pdfPassword?: string;
}

export interface ListTasksParams {
  readonly fromDate?: string;
  readonly toDate?: string;
  readonly excludeDeleted?: boolean;
}

export interface GetTaskStatusParams {
  taskId: string;
}

export interface DeleteTaskParams {
  taskId: string;
}
