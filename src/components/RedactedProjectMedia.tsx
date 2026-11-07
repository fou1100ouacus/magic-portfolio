"use client";

import type { ReactNode } from "react";
import styles from "./RedactedProjectMedia.module.scss";

interface RedactedProjectMediaProps {
  children: ReactNode;
  label?: string;
}

export function RedactedProjectMedia({
  children,
  label = "Project screenshot details redacted for privacy",
}: RedactedProjectMediaProps) {
  return (
    <div className={styles.frame} role="group" aria-label={label}>
      <div className={styles.media}>{children}</div>
      <div className={styles.cover} aria-hidden="true">
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}
