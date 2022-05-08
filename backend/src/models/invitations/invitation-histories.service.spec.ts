import { Test, TestingModule } from '@nestjs/testing';
import { InvitationHistoriesService } from './invitation-histories.service';

describe('InvitationHistoriesService', () => {
  let service: InvitationHistoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitationHistoriesService],
    }).compile();

    service = module.get<InvitationHistoriesService>(InvitationHistoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
