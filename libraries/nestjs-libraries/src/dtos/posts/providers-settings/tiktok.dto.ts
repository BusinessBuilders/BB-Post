import {
  IsBoolean, ValidateIf, IsIn, IsString, MaxLength, IsOptional
} from 'class-validator';

export class TikTokDto {
  @ValidateIf((p) => p.title)
  @MaxLength(90)
  title: string;

  // Required for Direct Post (TikTok: user must pick it, no default). Not sent
  // to TikTok for "Upload without posting" - the creator picks it in TikTok.
  @ValidateIf((p) => p.content_posting_method !== 'UPLOAD')
  @IsIn([
    'PUBLIC_TO_EVERYONE',
    'MUTUAL_FOLLOW_FRIENDS',
    'FOLLOWER_OF_CREATOR',
    'SELF_ONLY',
  ])
  @IsString()
  privacy_level:
    | 'PUBLIC_TO_EVERYONE'
    | 'MUTUAL_FOLLOW_FRIENDS'
    | 'FOLLOWER_OF_CREATOR'
    | 'SELF_ONLY';

  @IsBoolean()
  duet: boolean;

  @IsBoolean()
  stitch: boolean;

  @IsBoolean()
  comment: boolean;

  @IsIn(['yes', 'no'])
  autoAddMusic: 'yes' | 'no';

  @IsBoolean()
  brand_content_toggle: boolean;

  @IsBoolean()
  @IsOptional()
  video_made_with_ai: boolean;

  @IsBoolean()
  brand_organic_toggle: boolean;

  @IsIn(['DIRECT_POST', 'UPLOAD'])
  @IsString()
  content_posting_method: 'DIRECT_POST' | 'UPLOAD';

  // Snapshot of the creator_info query the composer was rendered from, used for
  // client-side validation (privacy option + max video length). The backend
  // re-queries TikTok before publishing; these are never sent to TikTok.
  @IsOptional()
  @IsString()
  creator_status?: string;

  @IsOptional()
  @IsString()
  creator_privacy_options?: string;

  @IsOptional()
  @IsString()
  creator_max_video_sec?: string;
}
