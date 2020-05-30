export interface AnydoResponceObject {
  models: {
    label: AnydoModel;
    category: AnydoModel;
    taskNotification: AnydoModel;
    sharedMember: AnydoModel;
    chatMessage: AnydoModel;
    task: AnydoModel;
    attachment: AnydoModel;
    chatConversation: AnydoModel;
    userNotification: AnydoModel;
    tag: AnydoModel;
  };
}

export interface AnydoModel {
  statusCode: number;
  items: AnydoModelItem[];
}

export interface AnydoModelItem {
  isSyncedWithAlexaUpdateTime?: null;
  isGroceryListUpdateTime?: number | null;
  isSyncedWithGoogleAssistantUpdateTime?: null;
  isGroceryList?: boolean;
  isSyncedWithGoogleAssistant?: boolean;
  activeGroupMethod?: ActiveGroupMethod | null;
  lastUpdateDate: number;
  activeGroupMethodUpdateTime?: number | null;
  id?: string;
  isDefaultUpdateTime?: number | null;
  nameUpdateTime?: number | null;
  default?: boolean;
  name?: string;
  positionUpdateTime?: number | null;
  isDeletedUpdateTime?: number | null;
  globalSharedGroupId?: string | null;
  isSyncedWithAlexa?: boolean;
  position?: null | string;
  isDeleted?: boolean;
  isDefault?: boolean;
  color?: string;
  isPredefined?: boolean;
  message?: null;
  target?: string;
  via?: string;
  status?: Status;
  sharedGroupId?: string;
  invitedByName?: string | null;
  invitedByEmail?: string | null;
  approvedDate?: number;
  parentGlobalTaskId?: null | string;
  dueDateUpdateTime?: number | null;
  latitude?: null;
  globalTaskId?: string;
  labelsUpdateTime?: number | null;
  labels?: string[] | null;
  chatConversationId?: null;
  assignedTo?: string;
  alert?: Alert | null;
  title?: string;
  statusUpdateTime?: number | null;
  priorityUpdateTime?: number | null;
  longitude?: null;
  shared?: boolean;
  assignedToUpdateTime?: number | null;
  chatConversationIdUpdateTime?: null;
  participants?: any[];
  creationDate?: number;
  note?: null | string;
  titleUpdateTime?: number | null;
  noteUpdateTime?: number | null;
  priority?: Priority;
  subTasks?: any[];
  alertUpdateTime?: number | null;
  dueDate?: number | null;
  categoryId?: string;
  categoryIdUpdateTime?: number | null;
  repeatingMethod?: string | null;
  params?: Params;
  refUserInitials?: string;
  refUserImage?: null | string;
  type?: ItemType;
  refUserId?: string;
  refUserName?: string;
  refUserEmail?: string;
  isRead?: boolean;
  isViewed?: boolean;
}

enum ActiveGroupMethod {
  Clean = "clean",
  Date = "date",
}

interface Alert {
  offset: number;
  repeatStartsOn: number | null;
  repeatEndsAfterOccurrences: number | null;
  type: AlertType;
  repeatEndType: string | null;
  repeatNextOccurrence: number | null;
  repeatMonthType: string | null;
  repeatEndsOn: null;
  repeatInterval: number | null;
  repeatDays: null | string;
  customTime: number;
}

enum AlertType {
  None = "NONE",
  Offset = "OFFSET",
}

interface Params {
  categoryId?: string;
  categoryName?: string;
  taskTitle?: string;
  taskId?: string;
}

enum Priority {
  High = "High",
  Normal = "Normal",
}

enum Status {
  Accepted = "ACCEPTED",
  Checked = "CHECKED",
  Creator = "CREATOR",
  Deleted = "DELETED",
  Done = "DONE",
  Unchecked = "UNCHECKED",
}

enum ItemType {
  AcceptedCategory = "ACCEPTED_CATEGORY",
  AddedTaskToSharedCategory = "ADDED_TASK_TO_SHARED_CATEGORY",
  CompletedTask = "COMPLETED_TASK",
}
