// /* eslint-disable import/no-unresolved */
// import { BadRequestException, Injectable } from '@nestjs/common';
// import type { App } from 'firebase-admin/app';
// import { cert, initializeApp } from 'firebase-admin/app';
// import type { DecodedIdToken } from 'firebase-admin/auth';
// import { getAuth } from 'firebase-admin/auth';
// import type { MessagingPayload } from 'firebase-admin/messaging';
// import { getMessaging } from 'firebase-admin/messaging';

// import { InvalidTokenException } from '../../exceptions';
// import type { SocialLoginDto } from '../../modules/auth/dtos/SocialLoginDto';
// import { ApiConfigService } from './api-config.service';

// @Injectable()
// export class FirebaseService {
//   private app: App;

//   constructor(private apiConfigService: ApiConfigService) {
//     this.app = initializeApp({
//       credential: cert(this.apiConfigService.firebaseConfig.credential),
//     });
//   }

//   async sendPushNotification(
//     registrationTokens: string[],
//     notification: MessagingPayload,
//   ): Promise<void> {
//     try {
//       await getMessaging(this.app).sendToDevice(
//         registrationTokens,
//         notification,
//       );
//     } catch (error) {
//       throw new BadRequestException(error.message);
//     }
//   }

//   async auth(loginDto: SocialLoginDto): Promise<DecodedIdToken> {
//     try {
//       return await getAuth(this.app).verifyIdToken(loginDto.idToken);
//     } catch {
//       throw new InvalidTokenException();
//     }
//   }
// }
