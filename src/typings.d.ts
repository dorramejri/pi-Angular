declare var module: NodeModule;
declare var $: any;

interface NodeModule {
  id: string;
}

declare module "*.json" {
  const value: any;
  export default value;
}

interface Course {
    id: string;
    name: string;
    date: string;
    time: string;
    address: string;
    duration: string;
    status: CourseStatus
}

type DisplayMode = 'CARD' | 'GRID';

type FormDisplayMode = 'CALENDAR' | 'FORM';

type CourseStatus = 'PENDING' | 'VALIDATED' | 'NOT_VALIDATED'