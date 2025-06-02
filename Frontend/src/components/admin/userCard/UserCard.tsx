"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "@/components/ui/button/Button";
import { User } from "@/shared/types/userATypes/user";
import { updateUserRole } from "@/shared/admin/users/users-api";

const UserCard = ({ user }: { user: User }) => {
    const [role, setRole] = useState(user.role); // локальний стан ролі
    const [loading, setLoading] = useState(false); // стан завантаження

    const handlePromote = async () => {
        try {
            setLoading(true);
            const updatedUser = await updateUserRole(user.id);
            setRole(updatedUser.role); // оновлюємо роль у стані
        } catch (error) {
            console.error("Не вдалося оновити роль користувача:", error);
            alert("Помилка при оновленні ролі користувача");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.movieCard}>
            <div className={styles.cardImage}>
                <img src={user.image} alt={user.firstName} />
            </div>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>
                    {user.firstName} {user.lastName}
                </h2>
                <p className={styles.cardEmail}>{user.email}</p>
                <div className={styles.cardDetails}>
                    <div>👤 {role}</div> {/* використовуємо стан */}
                    <div>📞 {user.phone}</div>
                </div>
            </div>
            {role === "User" && (
                <div className={styles.cardButtonWrapper}>
                    <Button variant="delete" onClick={handlePromote} disabled={loading}>
                        {loading ? "Оновлення..." : "Зробити адміністратором"}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default UserCard;
