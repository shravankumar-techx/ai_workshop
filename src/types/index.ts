export type UserRole = 'student' | 'faculty' | 'guest';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: UserRole;
  branch?: string;
  batch_year?: number;
  cgpa?: number;
  roll_number?: string;
  faculty_id?: string;
  phone?: string;
  created_at?: string;
}

export type ExamCategory =
  | 'Quantitative'
  | 'Logical Reasoning'
  | 'Verbal Ability'
  | 'Company Specific'
  | 'Japanese (JLPT N5)'
  | 'All';

export type ExamDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Question {
  id: string;
  exam_id: string;
  question_text: string;
  options: string[];
  correct_index: number;
  explanation: string;
  topic_tag?: string;
}

export interface Exam {
  id: string;
  title: string;
  category: 'Quantitative' | 'Logical Reasoning' | 'Verbal Ability' | 'Company Specific' | 'Japanese (JLPT N5)';
  company_tag?: string;
  description: string;
  duration_minutes: number;
  total_marks: number;
  passing_percentage: number;
  difficulty: ExamDifficulty;
  is_published: boolean;
  question_count?: number;
  created_at?: string;
  questions?: Question[];
}

export interface ExamAttempt {
  id: string;
  exam_id: string;
  exam_title?: string;
  category?: string;
  user_id: string;
  score: number;
  total_questions: number;
  correct_count: number;
  incorrect_count: number;
  unattempted_count: number;
  accuracy_percentage: number;
  percentile_estimate: number;
  time_taken_seconds: number;
  answers: Record<number, number>; // question index -> chosen option index
  flagged_questions?: number[];
  completed_at: string;
}

export interface Job {
  id: string;
  company_name: string;
  company_logo_url?: string;
  role_title: string;
  ctc: string;
  location: string;
  job_type: 'Full-time' | 'Internship' | 'Contract';
  eligibility: string;
  eligible_branches: string[];
  batch_year: string;
  min_cgpa: number;
  deadline: string;
  apply_url: string;
  is_active: boolean;
  created_at?: string;
}

export interface Newsletter {
  id: string;
  edition_no: number;
  title: string;
  summary: string;
  content_markdown: string;
  tags: string[];
  read_time: string;
  publish_date: string;
  author_name?: string;
  cover_image?: string;
  category?: string;
}

export interface Resource {
  id: string;
  title: string;
  category: 'aptitude' | 'technical' | 'interview';
  file_url: string;
  description: string;
  tags: string[];
  file_type: string;
  download_count: number;
  content_preview?: string;
  page_count?: number;
  file_size?: string;
  verified?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  quick_replies?: string[];
  engine?: string;
}

export interface StudentAnalyticsItem {
  id: string;
  full_name: string;
  email: string;
  roll_number: string;
  branch: string;
  batch_year: number;
  cgpa: number;
  tests_attempted: number;
  average_accuracy: number;
  overall_score: number;
  readiness_status: 'Drive Ready' | 'Needs Improvement' | 'High Potential';
  last_active: string;
}

export interface ReadinessScore {
  quantitative: number; // 0-100
  logical: number;
  verbal: number;
  overall: number;
  streak_days: number;
}
