import {
  sortable,
  readonly,
  boolean,
  datetime,
  Resource,
} from '../types';

const MemberGameInfo = new Resource({
  resourceId: 'MemberGameInfo',
  title: 'MemberGameInfo',
  description: 'Collection of MemberGameInfo data',
  showFields: [
	'MemberID',
	'Level',
	'Exps',
	'Points',
	'UserSTAT1',
	// 'HideYN',
	// 'DeleteYN',
	'CreatedAt',
	// 'UpdatedAt',
  ],
  primaryKey: 'MemberID',
  searchFields: [
    'MemberID',
  ],
  fieldGroup: [
  
  ],
  schema: {
	MemberID: {
		description: 'User identifier',
		readonly,
	},
	Level: {},
	Exps: {},
	Points: {},
	UserSTAT1: {},
	UserSTAT2: {},
	UserSTAT3: {},
	UserSTAT4: {},
	UserSTAT5: {},
	UserSTAT6: {},
	UserSTAT7: {},
	UserSTAT8: {},
	UserSTAT9: {},
	UserSTAT10: {},
	sCol1: {},
	sCol2: {},
	sCol3: {},
	sCol4: {},
	sCol5: {},
	sCol6: {},
	sCol7: {},
	sCol8: {},
	sCol9: {},
	sCol10: {},
	HideYN: {
      boolean,
    },
    DeleteYN: {
      boolean,
    },
    CreatedAt: {
      readonly,
      sortable,
      datetime,
    },
    UpdatedAt: {
      readonly,
    },
    DataFromRegion: {
      readonly,
    },
    DataFromRegionDT: {
      readonly,
    },
  },
});

export default MemberGameInfo;