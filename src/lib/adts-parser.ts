import AdtsFrame from "./adts-frame";

export class AdtsParser {
  adtsFrames: AdtsFrame[] = [];
  data: Uint8Array = new Uint8Array();

  public parse(data: Uint8Array) {
    this.data = data;
    this.adtsFrames = [];
    let offset = 0;
    const len = this.data.byteLength;
    let index = 0;
    while (offset < len) {
      const adtsFrame = new AdtsFrame(this.data, offset, index);
      index++;
      offset = adtsFrame.parse();
      this.adtsFrames.push(adtsFrame);
    }
  }
}
