enum ID {
  mpeg4 = "MPEG-4(0)",
  mpeg2 = "MPEG-2(1)",
}

function mpeg_version_to_string(id: number) : string {
  switch (id) {
    case 0:
      return "MPEG-4";
    case 1:
      return "MPEG-2";
    default:
      return "ERROR";
  }
}

function profile_to_string(profile: number) :string {
  switch (profile) {
    case 0:
      return 'AAC Main';
    case 1:
      return 'AAC LC';
    case 2:
      return 'AAC SSR';
    case 3:
      return 'AAC LTP';
    default:
      return 'error';
  }
}

function frequency_to_string(f: number): string {
  switch (f) {
    case 0:
      return '96000';
    case 1:
      return '88200';
    case 2:
      return '64000';
    case 3:
      return '48000';
    case 4:
      return '44100';
    case 5:
      return '32000';
    case 6:
      return '24000';
    case 7:
      return '22050';
    case 8:
      return '16000';
    case 9:
      return '12000';
    case 10:
      return '11025';
    case 11:
      return '8000';
    case 12:
      return '7350';
    case 13:
    case 14:
      return 'reserved';
    case 15:
      return 'escape value';
    default:
      return 'error';
  }
}

export default class AdtsFrame {
  isActive = false;

  error: string | undefined;
  syncword = "";
  mpeg_version = "";
  layer = 0;
  protection_absent = 0;
  profile = "";
  sampling_frequency_index = 0;
  sampling_frequency = "";
  private_bit = 0;
  channel_configuration = 0;
  original_copy = 0;
  home = 0;

  copyright_identification_bit = 0;
  copyright_identification_start = 0;
  length = 0;
  adts_buffer_fullness = 0;
  number_of_raw_data_blocks_in_frame = 0;
  aac_offset = 7;

  aac_data_string = "";

  crc = 0;

  constructor(readonly data: Uint8Array, readonly start: number, readonly index: number) {
  }

  public parse(): number {
    if (this.start + 7 > this.data.length) {
      this.error = 'not enough data';
      return this.data.length;
    }
    const d = this.data.slice(this.start, this.start + 7);

    const syncword = (d[0] << 4) | ((d[1] >> 4) & 0x0f);
    if (syncword !== 0x0fff) {
      this.error = 'invalid sync word';
      return this.data.length;
    }
    this.syncword = "0xFFF";
    const id = (d[1] >> 3) & 0x01;
    this.mpeg_version = `${id}[${mpeg_version_to_string(id)}]`;
    this.layer = (d[1] >> 1) & 0x03;
    this.protection_absent = d[1] & 0x01;
    const profile = (d[2] >> 6) & 0x03;
    this.profile = `${profile}[${profile_to_string(profile)}]`;
    this.sampling_frequency_index = (d[2] >> 2) & 0x0f;
    this.sampling_frequency = `${this.sampling_frequency_index}[${frequency_to_string(this.sampling_frequency_index)}Hz]`;
    this.private_bit = (d[2] >> 1) &0x01;
    this.channel_configuration = ((d[2] & 0x01) << 2) | ((d[3] >> 6) & 0x03);
    this.original_copy = (d[3] >> 5) &0x01;
    this.home = (d[3] >> 4) & 0x01;
    this.copyright_identification_bit = (d[3] >> 3) & 0x01;
    this.copyright_identification_start = (d[3] >> 2) & 0x01;

    this.length = ((d[3] & 0x3) << 11) | ((d[4] << 3) | (d[5] >> 5));
    if (this.start + this.length > this.data.length) {
      this.error = 'aac_frame_length todo'
      this.length = this.data.length - this.start;
      return this.data.length;
    }

    this.adts_buffer_fullness = ((d[5] & 0x1f) << 6) | ((d[6] >> 2) & 0x3f);
    this.number_of_raw_data_blocks_in_frame = d[6] & 0x03;

    if (this.protection_absent == 0) {
      if (this.start + 9 > this.data.length) {
        this.error = 'not enough data';
        return this.data.length;
      }
      this.aac_offset = 9;
      this.crc = (this.data[this.start + 7] << 8) | d[this.start + 8];
    }

    this.aac_data_string = this.getData();

    return this.start + this.length;
  }

  getData(): string {
    let s = "";
    for (let i = this.start + this.aac_offset; i < this.start + this.length; i++) {
      s = s + this.data[i].toString(16).toUpperCase();
    }
    return s;
  }
}
