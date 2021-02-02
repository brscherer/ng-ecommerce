import { Data } from '@angular/router';
import { RouterStateUrl } from './../../shared/models/router.model';
import { CustomSerializer } from './index';

interface MockActiveStateSnapshot {
  data?: Data;
  firstChild: MockActiveStateSnapshot | null;
}

interface MockRouterStateSnapshot {
  url: string;
  root: MockActiveStateSnapshot;
}

describe('CustomSerializer', () => {
  let serializer: CustomSerializer;

  beforeEach(() => {
    serializer = new CustomSerializer();
  });

  describe('serialize', () => {
    it('should return router state with default title and metatags', () => {
      const expected: RouterStateUrl = {
        url: 'test',
        title: 'NgEcommerce',
        metatags: [],
      };
      const input: MockRouterStateSnapshot = {
        url: 'test',
        root: {
          data: {},
          firstChild: null,
        },
      };

      expect(serializer.serialize(input as any)).toEqual(expected);
    });

    it('should return router state with updated title and metatags', () => {
      const expected: RouterStateUrl = {
        url: 'test',
        title: 'NgEcommerce | Test',
        metatags: [{ name: 'description', content: 'description test' }],
      };
      const input: MockRouterStateSnapshot = {
        url: 'test',
        root: {
          data: {},
          firstChild: {
            data: { title: 'Test', metatags: [{ name: 'description', content: 'description test' }] },
            firstChild: null,
          },
        },
      };

      expect(serializer.serialize(input as any)).toEqual(expected);
    });
  });
});
