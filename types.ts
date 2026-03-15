export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type SelectOption<T extends string> =
  | { key: T; value: string }
  | T;

export interface Skill extends CosmicObject {
  type?: "skills";
  metadata: {
    name?: string;
    level?: SelectOption<SkillLevel>;
    description?: string;
  };
}

export interface Project extends CosmicObject {
  type?: "projects";
  metadata: {
    name?: string;
    short_description?: string;
    project_details?: string;
    live_url?: string;
    repository_url?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    skills_used?: Skill[];
  };
}

export interface WorkExperience extends CosmicObject {
  type?: "work-experience";
  metadata: {
    company?: string;
    role?: string;
    start_date?: string;
    end_date?: string;
    summary?: string;
    key_skills?: Skill[];
  };
}

export interface Testimonial extends CosmicObject {
  type?: "testimonials";
  metadata: {
    name?: string;
    title_company?: string;
    quote?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}