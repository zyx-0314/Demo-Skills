D:\Codes\Demo-Skills>npm run test

> aits-membership-system@0.1.0 test
> jest --passWithNoTests

 PASS  __tests__/user.test.ts
  ● Console

    console.log
      Start

      at log (src/app/api/users/[id]/route.ts:9:11)

 PASS  __tests__/DIYHome/userReport.test.ts (5.232 s)
  ● Console

    console.log
      Setting up test user and post...

      at Object.log (__tests__/DIYHome/userReport.test.ts:12:13)

    console.log
      Creating test admin user...

      at Object.log (__tests__/DIYHome/userReport.test.ts:13:13)

    console.log
      Test admin user created: 1bbf4d2d-c546-448c-b424-5938bc0d9c03

      at Object.log (__tests__/DIYHome/userReport.test.ts:28:13)

    console.log
      Creating test post...

      at Object.log (__tests__/DIYHome/userReport.test.ts:30:13)

    console.log
      Start

      at log (src/app/api/DIYHomes/posts/route.ts:24:11)

    console.log
      DIY Table

      at log (src/app/api/DIYHomes/posts/route.ts:28:13)

    console.log
      Test post created: c6006ea7-2ecc-435e-8168-fe71ed115475

      at Object.log (__tests__/DIYHome/userReport.test.ts:45:13)

    console.log
      Creating a test report...

      at Object.log (__tests__/DIYHome/userReport.test.ts:49:13)

    console.log
      Creating report for postId: c6006ea7-2ecc-435e-8168-fe71ed115475, reviewId: undefined

      at log (src/app/api/DIYHomes/reports/route.ts:14:13)

    console.log
      Test report created: 9b32a60c-9b2f-494a-935a-73c10a3aeb73

      at Object.log (__tests__/DIYHome/userReport.test.ts:65:13)

 PASS  __tests__/DIYHome/interactions.test.ts (5.3 s)
  ● Console                                                                                                                                                                                  

    console.log
      Start

      at log (src/app/api/DIYHomes/posts/route.ts:24:11)

    console.log
      DIY Bench

      at log (src/app/api/DIYHomes/posts/route.ts:28:13)

 PASS  __tests__/DIYHome/post.test.ts (5.61 s)
  ● Console

    console.log
      Start

      at log (src/app/api/DIYHomes/posts/route.ts:24:11)

    console.log
      DIY Table

      at log (src/app/api/DIYHomes/posts/route.ts:28:13)

    console.log
      Fetching all posts...

      at log (src/app/api/DIYHomes/posts/route.ts:9:13)

    console.log
      Fetched posts: [
        {
          id: '76c90590-94fe-4c76-8de0-998e2aea99d6',
          title: 'DIY Bench',
          content: 'How to build a DIY bench',
          category: 'woodwork',
          userId: '667b9e7e-d4c8-4613-ab62-19b9156b9ff4',
          createdAt: 2025-03-17T16:26:20.126Z,
          user: {
            id: '667b9e7e-d4c8-4613-ab62-19b9156b9ff4',
            email: 'interactionuser@example.com',
            name: 'Interaction User',
            password: '$2b$10$8jJL8bdrqALun5E1EwF9UuZI39BjgwrcZMdFQ2S1/d4OnFyMyUBzm',
            group: 'member',
            createdAt: 2025-03-17T16:26:19.589Z
          }
        },
        {
          id: 'fb7da2d1-db0c-458c-ac99-72503e1be100',
          title: 'DIY Chair',
          content: 'How to make a DIY chair',
          category: 'woodwork',
          userId: '34ee6697-58d1-4c14-9bc3-90a6f824d7c8',
          createdAt: 2025-03-17T16:26:20.248Z,
          user: {
            id: '34ee6697-58d1-4c14-9bc3-90a6f824d7c8',
            email: 'reviewuser@example.com',
            name: 'Review User',
            password: '$2b$10$nPLZT5eQCL0qzHnODWKBWu.QqAcwV6UBTADx6vb0/43jHhNkhZ.aq',
            group: 'member',
            createdAt: 2025-03-17T16:26:19.689Z
          }
        },
        {
          id: '8c7c3300-6ca1-4aef-98e8-898f67d7c756',
          title: 'DIY Table',
          content: 'How to make a DIY table',
          category: 'woodwork',
          userId: '358bb73b-c5f6-4ae2-bf81-31dfa0d73879',
          createdAt: 2025-03-17T16:26:20.313Z,
          user: {
            id: '358bb73b-c5f6-4ae2-bf81-31dfa0d73879',
            email: 'testuser@example.com',
            name: 'Test User',
            password: '$2b$10$LhPL/XciOLVw8m5./TbJp.SIwcAzJGteeMhKKH8bpL/4YPq29evCO',
            group: 'member',
            createdAt: 2025-03-17T16:26:19.677Z
          }
        }
      ]

      at log (src/app/api/DIYHomes/posts/route.ts:13:13)

    console.log
      Fetching post with ID: 8c7c3300-6ca1-4aef-98e8-898f67d7c756

      at log (src/app/api/DIYHomes/posts/[id]/route.ts:9:13)

    console.log
      Fetched post: {
        id: '8c7c3300-6ca1-4aef-98e8-898f67d7c756',
        title: 'DIY Table',
        content: 'How to make a DIY table',
        category: 'woodwork',
        userId: '358bb73b-c5f6-4ae2-bf81-31dfa0d73879',
        createdAt: 2025-03-17T16:26:20.313Z,
        user: {
          id: '358bb73b-c5f6-4ae2-bf81-31dfa0d73879',
          email: 'testuser@example.com',
          name: 'Test User',
          password: '$2b$10$LhPL/XciOLVw8m5./TbJp.SIwcAzJGteeMhKKH8bpL/4YPq29evCO',
          group: 'member',
          createdAt: 2025-03-17T16:26:19.677Z
        }
      }

      at log (src/app/api/DIYHomes/posts/[id]/route.ts:14:13)

 PASS  __tests__/DIYHome/reviews.test.ts (5.766 s)
  ● Console

    console.log
      Creating test user...

      at Object.log (__tests__/DIYHome/reviews.test.ts:14:13)

    console.log
      Test user created: 34ee6697-58d1-4c14-9bc3-90a6f824d7c8

      at Object.log (__tests__/DIYHome/reviews.test.ts:29:13)

    console.log
      Creating test post...

      at Object.log (__tests__/DIYHome/reviews.test.ts:31:13)

    console.log
      Start

      at log (src/app/api/DIYHomes/posts/route.ts:24:11)

    console.log
      DIY Chair

      at log (src/app/api/DIYHomes/posts/route.ts:28:13)

    console.log
      Test post created: fb7da2d1-db0c-458c-ac99-72503e1be100

      at Object.log (__tests__/DIYHome/reviews.test.ts:46:13)

    console.log
      Creating test review...

      at Object.log (__tests__/DIYHome/reviews.test.ts:51:13)

    console.log
      Test review created: fc3bd655-6206-4b06-87bc-a8f761c4eb22

      at Object.log (__tests__/DIYHome/reviews.test.ts:67:13)

    console.log
      Fetching all reviews...

      at Object.log (__tests__/DIYHome/reviews.test.ts:73:13)

    console.log
      Fetched reviews: [
        {
          id: 'fc3bd655-6206-4b06-87bc-a8f761c4eb22',
          postId: 'fb7da2d1-db0c-458c-ac99-72503e1be100',
          userId: '34ee6697-58d1-4c14-9bc3-90a6f824d7c8',
          rating: 5,
          comment: 'Great DIY project!',
          createdAt: '2025-03-17T16:26:20.726Z',
          user: {
            id: '34ee6697-58d1-4c14-9bc3-90a6f824d7c8',
            email: 'reviewuser@example.com',
            name: 'Review User',
            password: '$2b$10$nPLZT5eQCL0qzHnODWKBWu.QqAcwV6UBTADx6vb0/43jHhNkhZ.aq',
            group: 'member',
            createdAt: '2025-03-17T16:26:19.689Z'
          }
        }
      ]

      at Object.log (__tests__/DIYHome/reviews.test.ts:77:13)

    console.log
      Updating test review...

      at Object.log (__tests__/DIYHome/reviews.test.ts:84:13)

    console.log
      Updated review: {
        id: 'fc3bd655-6206-4b06-87bc-a8f761c4eb22',
        postId: 'fb7da2d1-db0c-458c-ac99-72503e1be100',
        userId: '34ee6697-58d1-4c14-9bc3-90a6f824d7c8',
        rating: 4,
        comment: 'Updated review comment!',
        createdAt: '2025-03-17T16:26:20.726Z'
      }

      at Object.log (__tests__/DIYHome/reviews.test.ts:94:13)

    console.log
      Deleting test review...

      at Object.log (__tests__/DIYHome/reviews.test.ts:101:13)

    console.log
      Deleted review: { message: 'Review deleted successfully' }

      at Object.log (__tests__/DIYHome/reviews.test.ts:109:13)

 PASS  __tests__/DIYHome/admin.test.ts (8.807 s)
  ● Console

    console.log
      Creating test admin user...

      at Object.log (__tests__/DIYHome/admin.test.ts:16:13)

    console.log
      Test admin user created: 410c6810-715c-404a-8f8a-aac7e67c4bd1

      at Object.log (__tests__/DIYHome/admin.test.ts:31:13)

    console.log
      Creating test normal user...

      at Object.log (__tests__/DIYHome/admin.test.ts:33:13)

    console.log
      Test user created: d2848980-5f98-4826-8a48-994751ca73db

      at Object.log (__tests__/DIYHome/admin.test.ts:48:13)

    console.log
      Creating test post...

      at Object.log (__tests__/DIYHome/admin.test.ts:51:13)

    console.log
      Start

      at log (src/app/api/DIYHomes/posts/route.ts:24:11)

    console.log
      DIY Table

      at log (src/app/api/DIYHomes/posts/route.ts:28:13)

    console.log
      Test post created: 2f06d394-5d74-4392-93b8-b6bfd5027c99

      at Object.log (__tests__/DIYHome/admin.test.ts:66:13)

    console.log
      Creating test report...

      at Object.log (__tests__/DIYHome/admin.test.ts:69:13)

    console.log
      User:  d2848980-5f98-4826-8a48-994751ca73db

      at Object.log (__tests__/DIYHome/admin.test.ts:70:13)

    console.log
      Post:  2f06d394-5d74-4392-93b8-b6bfd5027c99

      at Object.log (__tests__/DIYHome/admin.test.ts:71:13)

    console.log
      Creating report for postId: 2f06d394-5d74-4392-93b8-b6bfd5027c99, reviewId: undefined

      at log (src/app/api/DIYHomes/reports/route.ts:14:13)

    console.log
      Test report created: fe8b61dc-aae7-40d1-bc08-43a0bb98ee71

      at Object.log (__tests__/DIYHome/admin.test.ts:85:13)

    console.log
      Fetching all reports...

      at Object.log (__tests__/DIYHome/admin.test.ts:90:13)

    console.log
      Reports fetched: [
        {
          id: '9b32a60c-9b2f-494a-935a-73c10a3aeb73',
          postId: 'c6006ea7-2ecc-435e-8168-fe71ed115475',
          reviewId: null,
          userId: '1bbf4d2d-c546-448c-b424-5938bc0d9c03',
          reason: 'Spam content',
          createdAt: '2025-03-17T16:26:20.975Z',
          user: {
            id: '1bbf4d2d-c546-448c-b424-5938bc0d9c03',
            email: 'userReportTest@example.com',
            name: 'Admin User',
            password: '$2b$10$qF8mG2e3Ang.uT9lIl.ABeMm7eDDnBpju9hAyqbIA5wXP70Fih0bO',
            group: 'admin',
            createdAt: '2025-03-17T16:26:19.918Z'
          },
          post: {
            id: 'c6006ea7-2ecc-435e-8168-fe71ed115475',
            title: 'DIY Table',
            content: 'How to make a DIY table',
            category: 'woodwork',
            userId: '1bbf4d2d-c546-448c-b424-5938bc0d9c03',
            createdAt: '2025-03-17T16:26:20.460Z'
          },
          review: null
        },
        {
          id: 'fe8b61dc-aae7-40d1-bc08-43a0bb98ee71',
          postId: '2f06d394-5d74-4392-93b8-b6bfd5027c99',
          reviewId: null,
          userId: 'd2848980-5f98-4826-8a48-994751ca73db',
          reason: 'Spam content',
          createdAt: '2025-03-17T16:26:21.041Z',
          user: {
            id: 'd2848980-5f98-4826-8a48-994751ca73db',
            email: 'user@example.com',
            name: 'Test User',
            password: '$2b$10$QqyX1ya.xX24lxGeX38EAeFgnJ1JKT7uciX9uVmDlhET3F7Gzs2iK',
            group: 'member',
            createdAt: '2025-03-17T16:26:20.131Z'
          },
          post: {
            id: '2f06d394-5d74-4392-93b8-b6bfd5027c99',
            title: 'DIY Table',
            content: 'How to make a DIY table',
            category: 'woodwork',
            userId: 'd2848980-5f98-4826-8a48-994751ca73db',
            createdAt: '2025-03-17T16:26:20.554Z'
          },
          review: null
        }
      ]

      at Object.log (__tests__/DIYHome/admin.test.ts:94:13)

    console.log
      Deleting test report...

      at Object.log (__tests__/DIYHome/admin.test.ts:101:13)

    console.log
      Deleting report: fe8b61dc-aae7-40d1-bc08-43a0bb98ee71

      at log (src/app/api/DIYHomes/admin/reports/route.ts:28:13)

    console.log
      Report fe8b61dc-aae7-40d1-bc08-43a0bb98ee71 deleted successfully

      at log (src/app/api/DIYHomes/admin/reports/route.ts:38:13)

    console.log
      Report deleted: { message: 'Report deleted successfully' }

      at Object.log (__tests__/DIYHome/admin.test.ts:111:13)

    console.log
      Fetching all posts...

      at Object.log (__tests__/DIYHome/admin.test.ts:122:13)

    console.log
      Posts fetched: [
        {
          id: '76c90590-94fe-4c76-8de0-998e2aea99d6',
          title: 'DIY Bench',
          content: 'How to build a DIY bench',
          category: 'woodwork',
          userId: '667b9e7e-d4c8-4613-ab62-19b9156b9ff4',
          createdAt: '2025-03-17T16:26:20.126Z',
          user: {
            id: '667b9e7e-d4c8-4613-ab62-19b9156b9ff4',
            email: 'interactionuser@example.com',
            name: 'Interaction User',
            password: '$2b$10$8jJL8bdrqALun5E1EwF9UuZI39BjgwrcZMdFQ2S1/d4OnFyMyUBzm',
            group: 'member',
            createdAt: '2025-03-17T16:26:19.589Z'
          }
        },
        {
          id: 'fb7da2d1-db0c-458c-ac99-72503e1be100',
          title: 'DIY Chair',
          content: 'How to make a DIY chair',
          category: 'woodwork',
          userId: '34ee6697-58d1-4c14-9bc3-90a6f824d7c8',
          createdAt: '2025-03-17T16:26:20.248Z',
          user: {
            id: '34ee6697-58d1-4c14-9bc3-90a6f824d7c8',
            email: 'reviewuser@example.com',
            name: 'Review User',
            password: '$2b$10$nPLZT5eQCL0qzHnODWKBWu.QqAcwV6UBTADx6vb0/43jHhNkhZ.aq',
            group: 'member',
            createdAt: '2025-03-17T16:26:19.689Z'
          }
        },
        {
          id: 'c6006ea7-2ecc-435e-8168-fe71ed115475',
          title: 'DIY Table',
          content: 'How to make a DIY table',
          category: 'woodwork',
          userId: '1bbf4d2d-c546-448c-b424-5938bc0d9c03',
          createdAt: '2025-03-17T16:26:20.460Z',
          user: {
            id: '1bbf4d2d-c546-448c-b424-5938bc0d9c03',
            email: 'userReportTest@example.com',
            name: 'Admin User',
            password: '$2b$10$qF8mG2e3Ang.uT9lIl.ABeMm7eDDnBpju9hAyqbIA5wXP70Fih0bO',
            group: 'admin',
            createdAt: '2025-03-17T16:26:19.918Z'
          }
        },
        {
          id: '2f06d394-5d74-4392-93b8-b6bfd5027c99',
          title: 'DIY Table',
          content: 'How to make a DIY table',
          category: 'woodwork',
          userId: 'd2848980-5f98-4826-8a48-994751ca73db',
          createdAt: '2025-03-17T16:26:20.554Z',
          user: {
            id: 'd2848980-5f98-4826-8a48-994751ca73db',
            email: 'user@example.com',
            name: 'Test User',
            password: '$2b$10$QqyX1ya.xX24lxGeX38EAeFgnJ1JKT7uciX9uVmDlhET3F7Gzs2iK',
            group: 'member',
            createdAt: '2025-03-17T16:26:20.131Z'
          }
        }
      ]

      at Object.log (__tests__/DIYHome/admin.test.ts:126:13)

    console.log
      Deleting test post...

      at Object.log (__tests__/DIYHome/admin.test.ts:133:13)

    console.log
      Deleting post: 2f06d394-5d74-4392-93b8-b6bfd5027c99

      at log (src/app/api/DIYHomes/admin/posts/route.ts:28:13)

    console.log
      Post 2f06d394-5d74-4392-93b8-b6bfd5027c99 deleted successfully

      at log (src/app/api/DIYHomes/admin/posts/route.ts:46:13)

    console.log
      Post deleted: { message: 'Post deleted successfully' }

      at Object.log (__tests__/DIYHome/admin.test.ts:143:13)

    console.log
      Fetching all users...

      at Object.log (__tests__/DIYHome/admin.test.ts:154:13)

    console.log
      Users fetched: [
        {
          id: '667b9e7e-d4c8-4613-ab62-19b9156b9ff4',
          email: 'interactionuser@example.com',
          name: 'Interaction User',
          group: 'member',
          createdAt: '2025-03-17T16:26:19.589Z'
        },
        {
          id: '358bb73b-c5f6-4ae2-bf81-31dfa0d73879',
          email: 'testuser@example.com',
          name: 'Test User',
          group: 'member',
          createdAt: '2025-03-17T16:26:19.677Z'
        },
        {
          id: '34ee6697-58d1-4c14-9bc3-90a6f824d7c8',
          email: 'reviewuser@example.com',
          name: 'Review User',
          group: 'member',
          createdAt: '2025-03-17T16:26:19.689Z'
        },
        {
          id: '410c6810-715c-404a-8f8a-aac7e67c4bd1',
          email: 'admin@example.com',
          name: 'Admin User',
          group: 'admin',
          createdAt: '2025-03-17T16:26:19.769Z'
        },
        {
          id: '1bbf4d2d-c546-448c-b424-5938bc0d9c03',
          email: 'userReportTest@example.com',
          name: 'Admin User',
          group: 'admin',
          createdAt: '2025-03-17T16:26:19.918Z'
        },
        {
          id: 'd2848980-5f98-4826-8a48-994751ca73db',
          email: 'user@example.com',
          name: 'Test User',
          group: 'member',
          createdAt: '2025-03-17T16:26:20.131Z'
        }
      ]

      at Object.log (__tests__/DIYHome/admin.test.ts:158:13)

    console.log
      Banning test user...

      at Object.log (__tests__/DIYHome/admin.test.ts:165:13)

    console.log
      Banning user: d2848980-5f98-4826-8a48-994751ca73db

      at log (src/app/api/DIYHomes/admin/users/route.ts:28:13)

    console.log
      User d2848980-5f98-4826-8a48-994751ca73db banned successfully

      at log (src/app/api/DIYHomes/admin/users/route.ts:49:13)

    console.log
      User banned: { message: 'User banned successfully' }

      at Object.log (__tests__/DIYHome/admin.test.ts:175:13)

Test Suites: 6 passed, 6 total
Tests:       23 passed, 23 total
Snapshots:   0 total
Time:        9.964 s, estimated 10 s
Ran all test suites.

make documentation in md of how this is used when in axios
